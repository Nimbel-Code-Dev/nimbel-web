import { describe, it, expect } from 'vitest';
import {
  FormValidator,
  getDefaultContactFormRules,
} from '@/utils/formValidation';
import type { FormValidatorConfig } from '@/utils/formValidation';

// ─── Messages (sourced from i18n es.ts / en.ts) ───────────────────────────────

const messages = {
  es: {
    'name.required': 'El nombre es obligatorio',
    'name.minLength': 'El nombre debe tener al menos 3 caracteres',
    'name.maxLength': 'El nombre no puede exceder 100 caracteres',
    'name.pattern': 'El nombre solo puede contener letras y espacios',
    'email.required': 'El email es obligatorio',
    'email.email': 'El email no es válido',
    'message.required': 'El mensaje es obligatorio',
    'message.minLength': 'El mensaje debe tener al menos 10 caracteres',
    'message.maxLength': 'El mensaje no puede exceder 5000 caracteres',
    'success': 'Mensaje enviado con éxito',
  },
  en: {
    'name.required': 'Name is required',
    'name.minLength': 'Name must be at least 3 characters',
    'name.maxLength': 'Name cannot exceed 100 characters',
    'name.pattern': 'Name can only contain letters and spaces',
    'email.required': 'Email is required',
    'email.email': 'Email is not valid',
    'message.required': 'Message is required',
    'message.minLength': 'Message must be at least 10 characters',
    'message.maxLength': 'Message cannot exceed 5000 characters',
    'success': 'Message sent successfully',
  },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeValidator(locale: 'es' | 'en' = 'es') {
  const config: FormValidatorConfig = {
    rules: getDefaultContactFormRules(),
    messages,
  };
  return new FormValidator(config, locale);
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('FormValidator', () => {
  // ── 1. Required field validation ────────────────────────────────────────────

  describe('required rule', () => {
    it('returns error when field is empty string', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', '')).toBe('El nombre es obligatorio');
    });

    it('returns error when field is undefined', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', undefined)).toBe('El nombre es obligatorio');
    });

    it('returns error when field is whitespace only', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', '   ')).toBe('El nombre es obligatorio');
    });

    it('returns null when required field has a value', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', 'Ana García')).toBeNull();
    });
  });

  // ── 2. Email validation ──────────────────────────────────────────────────────

  describe('email rule', () => {
    it('returns error for invalid email', () => {
      const validator = makeValidator();
      expect(validator.validateField('email', 'not-an-email')).toBe('El email no es válido');
    });

    it('returns error for email without domain', () => {
      const validator = makeValidator();
      expect(validator.validateField('email', 'user@')).toBe('El email no es válido');
    });

    it('returns null for valid email', () => {
      const validator = makeValidator();
      expect(validator.validateField('email', 'user@example.com')).toBeNull();
    });

    it('returns required error before email format check when empty', () => {
      const validator = makeValidator();
      expect(validator.validateField('email', '')).toBe('El email es obligatorio');
    });
  });

  // ── 3. MinLength validation ──────────────────────────────────────────────────

  describe('minLength rule', () => {
    it('returns error when name is shorter than 3 chars', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', 'Al')).toBe(
        'El nombre debe tener al menos 3 caracteres',
      );
    });

    it('returns null when name meets minLength', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', 'Ana')).toBeNull();
    });

    it('returns error when message is shorter than 10 chars', () => {
      const validator = makeValidator();
      expect(validator.validateField('message', 'Hola')).toBe(
        'El mensaje debe tener al menos 10 caracteres',
      );
    });
  });

  // ── 4. MaxLength validation ──────────────────────────────────────────────────

  describe('maxLength rule', () => {
    it('returns error when name exceeds 100 chars', () => {
      const validator = makeValidator();
      const longName = 'a'.repeat(101);
      expect(validator.validateField('name', longName)).toBe(
        'El nombre no puede exceder 100 caracteres',
      );
    });

    it('returns null when name is exactly 100 chars', () => {
      const validator = makeValidator();
      const exactName = 'a'.repeat(100);
      expect(validator.validateField('name', exactName)).toBeNull();
    });

    it('returns error when message exceeds 5000 chars', () => {
      const validator = makeValidator();
      const longMsg = 'a'.repeat(5001);
      expect(validator.validateField('message', longMsg)).toBe(
        'El mensaje no puede exceder 5000 caracteres',
      );
    });
  });

  // ── 5. Pattern validation ────────────────────────────────────────────────────

  describe('pattern rule', () => {
    it('returns error when name contains numbers', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', 'Ana 123')).toBe(
        'El nombre solo puede contener letras y espacios',
      );
    });

    it('returns error when name contains special characters', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', 'Ana@García')).toBe(
        'El nombre solo puede contener letras y espacios',
      );
    });

    it('returns null for name with accented characters and spaces', () => {
      const validator = makeValidator();
      expect(validator.validateField('name', 'María José López')).toBeNull();
    });
  });

  // ── 6. Custom rule validation ─────────────────────────────────────────────────

  describe('custom rule', () => {
    it('returns error when custom fn returns false', () => {
      const config: FormValidatorConfig = {
        rules: {
          budget: [
            { type: 'custom', value: (val) => Number(val) >= 1000 },
          ],
        },
        messages: {
          es: { 'budget.custom': 'El presupuesto mínimo es 1000' },
        },
      };
      const validator = new FormValidator(config, 'es');
      expect(validator.validateField('budget', 500)).toBe('El presupuesto mínimo es 1000');
    });

    it('returns null when custom fn returns true', () => {
      const config: FormValidatorConfig = {
        rules: {
          budget: [
            { type: 'custom', value: (val) => Number(val) >= 1000 },
          ],
        },
      };
      const validator = new FormValidator(config, 'es');
      expect(validator.validateField('budget', 1500)).toBeNull();
    });
  });

  // ── 7. Multiple rules on same field ──────────────────────────────────────────

  describe('multiple rules on same field', () => {
    it('returns the FIRST failing rule error', () => {
      const validator = makeValidator();
      // Empty string hits 'required' before 'minLength'
      expect(validator.validateField('name', '')).toBe('El nombre es obligatorio');
    });

    it('validates second rule when first passes', () => {
      const validator = makeValidator();
      // 'Al' passes required but fails minLength
      expect(validator.validateField('name', 'Al')).toBe(
        'El nombre debe tener al menos 3 caracteres',
      );
    });
  });

  // ── 8. Full form validation — all fields pass ──────────────────────────────────

  describe('validateForm — all fields valid', () => {
    it('returns isValid: true with no errors', () => {
      const validator = makeValidator();
      const result = validator.validateForm({
        name: 'Ana García',
        email: 'ana@example.com',
        message: 'Hola, me gustaría hablar sobre un proyecto.',
      });
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });
  });

  // ── 9. Full form validation — some fields fail ──────────────────────────────────

  describe('validateForm — some fields invalid', () => {
    it('returns isValid: false with correct errors', () => {
      const validator = makeValidator();
      const result = validator.validateForm({
        name: '',
        email: 'invalid-email',
        message: 'Hola, me gustaría hablar sobre un proyecto.',
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe('El nombre es obligatorio');
      expect(result.errors.email).toBe('El email no es válido');
      expect(result.errors.message).toBeUndefined();
    });
  });

  // ── 10. i18n message retrieval ────────────────────────────────────────────────

  describe('i18n messages', () => {
    it('returns Spanish messages with locale es', () => {
      const validator = makeValidator('es');
      expect(validator.getErrorMessage('name', 'required')).toBe('El nombre es obligatorio');
    });

    it('returns English messages with locale en', () => {
      const validator = makeValidator('en');
      expect(validator.getErrorMessage('name', 'required')).toBe('Name is required');
    });

    it('returns English email error with locale en', () => {
      const validator = makeValidator('en');
      expect(validator.validateField('email', 'bad')).toBe('Email is not valid');
    });
  });

  // ── 11. Custom messages override defaults ─────────────────────────────────────

  describe('setMessages — custom messages override defaults', () => {
    it('overrides a default message', () => {
      const validator = makeValidator('es');
      validator.setMessages({
        es: { 'name.required': 'Ponele tu nombre, porfa' },
      });
      expect(validator.validateField('name', '')).toBe('Ponele tu nombre, porfa');
    });

    it('does not affect other messages', () => {
      const validator = makeValidator('es');
      validator.setMessages({
        es: { 'name.required': 'Ponele tu nombre, porfa' },
      });
      expect(validator.validateField('email', '')).toBe('El email es obligatorio');
    });
  });

  // ── 12. Touched field tracking ───────────────────────────────────────────────

  describe('touched tracking in validateForm', () => {
    it('marks provided fields as touched', () => {
      const validator = makeValidator();
      const result = validator.validateForm({
        name: 'Ana',
        email: 'ana@example.com',
        message: 'Este es un mensaje de prueba.',
      });
      expect(result.touched.name).toBe(true);
      expect(result.touched.email).toBe(true);
      expect(result.touched.message).toBe(true);
    });

    it('marks missing optional fields as untouched', () => {
      const validator = makeValidator();
      const result = validator.validateForm({
        name: 'Ana',
        email: 'ana@example.com',
        // message intentionally omitted
      });
      expect(result.touched.message).toBe(false);
    });
  });

  // ── 13. Empty form data ───────────────────────────────────────────────────────

  describe('empty form data', () => {
    it('returns isValid: false when form is completely empty', () => {
      const validator = makeValidator();
      const result = validator.validateForm({});
      expect(result.isValid).toBe(false);
    });
  });

  // ── 14. All fields with errors ────────────────────────────────────────────────

  describe('all fields invalid', () => {
    it('returns errors for every field', () => {
      const validator = makeValidator();
      const result = validator.validateForm({
        name: '',
        email: '',
        message: '',
      });
      expect(result.isValid).toBe(false);
      expect(Object.keys(result.errors)).toHaveLength(3);
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.message).toBeDefined();
    });
  });

  // ── 15. Mixed valid/invalid fields ────────────────────────────────────────────

  describe('mixed valid and invalid fields', () => {
    it('only reports errors for invalid fields', () => {
      const validator = makeValidator();
      const result = validator.validateForm({
        name: 'Carlos',            // valid
        email: 'not-an-email',     // invalid
        message: 'Mensaje largo suficiente para pasar validación.', // valid
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeUndefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.message).toBeUndefined();
    });
  });

  // ── 16. Unknown field returns null ────────────────────────────────────────────

  describe('unknown field', () => {
    it('returns null for a field with no rules defined', () => {
      const validator = makeValidator();
      expect(validator.validateField('unknownField', 'anything')).toBeNull();
    });
  });

  // ── 17. injected messages structure ──────────────────────────────────────────

  describe('injected messages structure', () => {
    it('has all required ES keys', () => {
      const requiredKeys = [
        'name.required', 'name.minLength', 'name.maxLength', 'name.pattern',
        'email.required', 'email.email',
        'message.required', 'message.minLength', 'message.maxLength',
        'success',
      ];
      for (const key of requiredKeys) {
        expect(messages.es[key as keyof typeof messages.es], `Missing ES key: ${key}`).toBeDefined();
      }
    });

    it('has all required EN keys', () => {
      const requiredKeys = [
        'name.required', 'name.minLength', 'name.maxLength', 'name.pattern',
        'email.required', 'email.email',
        'message.required', 'message.minLength', 'message.maxLength',
        'success',
      ];
      for (const key of requiredKeys) {
        expect(messages.en[key as keyof typeof messages.en], `Missing EN key: ${key}`).toBeDefined();
      }
    });
  });
});
