/**
 * Shared by Input and Textarea so the two can never drift out of sync
 * on focus ring, disabled, and error treatment.
 */
export function fieldClass({ error = false, className = "" } = {}) {
  const borderClass = error
    ? "border-red-600 focus:ring-red-600"
    : "border-gray-200 dark:border-white/10 focus:ring-gold-600";

  return `w-full rounded-lg border bg-white px-4 py-2.5 text-navy-950 placeholder:text-gray-400
    dark:bg-navy-900 dark:text-white dark:placeholder:text-gray-500
    transition-colors duration-150 focus:outline-none focus:ring-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-navy-800
    ${borderClass} ${className}`;
}
