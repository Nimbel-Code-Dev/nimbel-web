import type { Locale } from '@/i18n/utils';

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface ValidationRule {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: number | RegExp | ((val: unknown) => boolean);
}

export interface FieldRules {
  [fieldName: string]: ValidationRule[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

export interface FormValidatorConfig {
  rules: FieldRules;
  messages?: Record<string, Record<string, string>>;
}

// ─── Email regex (same as HTML5 spec) ─────────────────────────────────────────

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

// ─── Default rules ────────────────────────────────────────────────────────────

export function getDefaultContactFormRules(): FieldRules {
  return {
    name: [
      { type: 'required' },
      { type: 'minLength', value: 3 },
      { type: 'maxLength', value: 100 },
      { type: 'pattern', value: /^[a-záéíóúàèìòùâêîôûäëïöüñ\s]+$/i },
    ],
    email: [
      { type: 'required' },
      { type: 'email' },
    ],
    message: [
      { type: 'required' },
      { type: 'minLength', value: 10 },
      { type: 'maxLength', value: 5000 },
    ],
  };
}

// ─── FormValidator class ──────────────────────────────────────────────────────

export class FormValidator {
  private config: FormValidatorConfig;
  private locale: Locale;
  private messages: Record<string, Record<string, string>>;

  constructor(config: FormValidatorConfig, locale: Locale = 'es') {
    this.config = config;
    this.locale = locale;
    this.messages = config.messages ?? {};
  }

  /** Validate a single field. Returns error message or null if valid. */
  validateField(fieldName: string, value: unknown): string | null {
    const rules = this.config.rules[fieldName];
    if (!rules) return null;

    for (const rule of rules) {
      const error = this.applyRule(rule, value);
      if (error !== null) {
        return this.getErrorMessage(fieldName, rule.type);
      }
    }

    return null;
  }

  /** Validate all fields in formData. Returns a ValidationResult. */
  validateForm(formData: Record<string, unknown>): ValidationResult {
    const errors: Record<string, string> = {};
    const touched: Record<string, boolean> = {};

    const allFields = new Set([
      ...Object.keys(this.config.rules),
      ...Object.keys(formData),
    ]);

    for (const field of allFields) {
      const value = formData[field];
      touched[field] = value !== undefined;

      const error = this.validateField(field, value);
      if (error !== null) {
        errors[field] = error;
      }
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      touched,
    };
  }

  /** Returns the i18n message for field + errorType combination. */
  getErrorMessage(fieldName: string, errorType: string): string {
    const localeMessages = this.messages[this.locale] ?? {};
    const key = `${fieldName}.${errorType}`;
    return localeMessages[key] ?? `Validation error: ${key}`;
  }

  /** Merge custom messages into the existing message map. */
  setMessages(messages: Record<string, Record<string, string>>): void {
    for (const locale of Object.keys(messages)) {
      this.messages[locale] = {
        ...(this.messages[locale] ?? {}),
        ...messages[locale],
      };
    }
  }

  // ─── Private helpers ──────────────────────────────────────────────────────

  private applyRule(rule: ValidationRule, value: unknown): string | null {
    const str = value != null ? String(value) : '';

    switch (rule.type) {
      case 'required': {
        if (value === undefined || value === null || str.trim() === '') {
          return 'required';
        }
        return null;
      }

      case 'email': {
        if (str.trim() === '') return null; // required handles empty
        if (!EMAIL_REGEX.test(str.trim())) return 'email';
        return null;
      }

      case 'minLength': {
        if (str.trim() === '') return null; // required handles empty
        const min = rule.value as number;
        if (str.length < min) return 'minLength';
        return null;
      }

      case 'maxLength': {
        const max = rule.value as number;
        if (str.length > max) return 'maxLength';
        return null;
      }

      case 'pattern': {
        if (str.trim() === '') return null; // required handles empty
        const regex = rule.value as RegExp;
        if (!regex.test(str)) return 'pattern';
        return null;
      }

      case 'custom': {
        const fn = rule.value as (val: unknown) => boolean;
        if (!fn(value)) return 'custom';
        return null;
      }

      default:
        return null;
    }
  }
}
