import { useState } from "react";
import {
  FormValidator,
  getDefaultContactFormRules,
} from "@/utils/formValidation";

interface Props {
  locale: string;
  messages: Record<string, string>;
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
  };
  successTitle: string;
  successMessage: string;
}

type Fields = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm({
  locale,
  messages,
  labels,
  successTitle,
  successMessage,
}: Props) {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validator = new FormValidator(
    { rules: getDefaultContactFormRules() },
    locale as "es" | "en"
  );
  validator.setMessages({ [locale]: messages });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validator.validateField(name, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (error) next[name] = error;
        else delete next[name];
        return next;
      });
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validator.validateField(name, value);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = validator.validateForm(fields);
    setTouched({ name: true, email: true, message: true });
    setErrors(result.errors);

    if (!result.isValid) return;

    setSubmitting(true);

    const subject = encodeURIComponent(`Nuevo proyecto: ${fields.name}`);
    const body = encodeURIComponent(
      `Nombre: ${fields.name}\nEmail: ${fields.email}\n\nMensaje:\n${fields.message}`
    );

    window.location.href = `mailto:ruben@nimbel.net?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <div className="w-12 h-12 rounded-full bg-nimbel-accent flex items-center justify-center shrink-0">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-mortend text-2xl sm:text-3xl uppercase text-nimbel-bg">
          {successTitle}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-name"
          className="text-sm text-nimbel-bg font-medium"
        >
          {labels.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="bg-transparent border-b border-nimbel-bg py-2 text-nimbel-bg outline-none placeholder:text-gray-400 focus:border-nimbel-accent transition-colors"
        />
        {touched.name && errors.name && (
          <span className="text-red-500 text-xs mt-1">{errors.name}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-email"
          className="text-sm text-nimbel-bg font-medium"
        >
          {labels.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="bg-transparent border-b border-nimbel-bg py-2 text-nimbel-bg outline-none placeholder:text-gray-400 focus:border-nimbel-accent transition-colors"
        />
        {touched.email && errors.email && (
          <span className="text-red-500 text-xs mt-1">{errors.email}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-message"
          className="text-sm text-nimbel-bg font-medium"
        >
          {labels.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="bg-transparent border-b border-nimbel-bg py-2 text-nimbel-bg outline-none placeholder:text-gray-400 focus:border-nimbel-accent transition-colors resize-none"
        />
        {touched.message && errors.message && (
          <span className="text-red-500 text-xs mt-1">{errors.message}</span>
        )}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={submitting}
          className={`btn-primary ${submitting ? "cursor-not-allowed opacity-70" : ""}`}
        >
          {submitting ? labels.sending : labels.submit}
        </button>
      </div>
    </form>
  );
}
