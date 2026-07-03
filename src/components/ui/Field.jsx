/**
 * Label + input/textarea + optional helper or error message, so every
 * form field carries the same label sizing and error-text treatment.
 * Wrap an <Input> or <Textarea> as the child.
 */
export default function Field({ label, htmlFor, required, error, helpText, className = "", children }) {
  return (
    <div className={className}>
      <label className="block text-sm text-gray-600 mb-1.5" htmlFor={htmlFor}>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-sm text-red-500">{error}</p>
      ) : (
        helpText && <p className="mt-1.5 text-sm text-gray-400">{helpText}</p>
      )}
    </div>
  );
}
