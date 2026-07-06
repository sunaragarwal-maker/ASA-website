import { processSteps } from "../servicesData";

/**
 * The 6-step engagement process, shared across the Services landing page
 * and every category page. Horizontal on desktop, a connected vertical
 * line on mobile.
 */
export default function ProcessTimeline() {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
      {processSteps.map((step, i) => (
        <li key={step.title} className="relative flex lg:flex-col gap-4 lg:gap-0 lg:text-center">
          <div className="flex flex-col items-center shrink-0">
            <div className="w-11 h-11 rounded-full bg-navy-950 ring-1 ring-inset ring-gold-500/40 text-gold-400 font-serif flex items-center justify-center shrink-0">
              {i + 1}
            </div>
            {i < processSteps.length - 1 && (
              <div
                className="w-px flex-1 bg-gray-200 mt-2 lg:hidden"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="lg:mt-4 pb-8 lg:pb-0">
            <p className="font-serif text-lg text-navy-950">{step.title}</p>
            <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
