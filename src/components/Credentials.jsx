import { firm, stats } from "../content";
import { Section, SectionHeading } from "./ui";

const yearsStat = stats.find((s) => s.label === "Years of Experience");
const clientsStat = stats.find((s) => s.label === "Clients Served");

const credentials = [
  { value: "FCA", label: "Fellow Chartered Accountant, ICAI" },
  { value: "DISA", label: "Diploma in Information Systems Audit" },
  { value: yearsStat.value, label: "Years in Continuous Practice" },
  { value: clientsStat.value, label: "Clients Advised Across Industries" },
];

/**
 * Credentials presented as medallions — navy + gold ring + serif content,
 * the same construction as the logo mark — rather than another white
 * icon-card grid (this page already has one in FirmValues). A credential
 * is a badge you've earned, not a service you offer, so it gets the
 * "seal" treatment instead.
 */
export default function Credentials() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Credentials"
        title="The Credentials Behind the Advice"
        subtext={`A qualification only matters if it changes what you get. Here's what ${firm.founderCreds.replace(", ", " and ")} and two decades of practice actually add up to.`}
      />
      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {credentials.map((item) => (
          <div key={item.label} className="text-center">
            <div className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-navy-950 ring-1 ring-inset ring-gold-500/40 flex items-center justify-center">
              <span className="font-serif text-xl md:text-2xl text-gold-400">{item.value}</span>
            </div>
            <p className="mt-4 text-sm text-ink-muted leading-snug max-w-[12rem] mx-auto">{item.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
