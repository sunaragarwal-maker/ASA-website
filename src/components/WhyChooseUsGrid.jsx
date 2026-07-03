import { whyChooseUsExtended } from "../servicesData";
import IconCard from "./IconCard";

/**
 * The 8-point "why choose us" grid used on service pages. Deliberately a
 * separate component from the homepage's WhyChooseUs (4 items, dark
 * section) rather than a shared one — the two appear in different visual
 * contexts and reusing one would mean forcing a prop for every stylistic
 * difference between them.
 */
export default function WhyChooseUsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {whyChooseUsExtended.map((item) => (
        <IconCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </div>
  );
}
