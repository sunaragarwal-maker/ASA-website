/**
 * The rounded square icon container used on service cards and contact
 * info rows (navy tile, gold icon). `size` covers the two current
 * footprints; `circle` switches to a fully round tile for the
 * WhyChooseUs treatment (bordered, translucent, no fill).
 */
const sizes = {
  sm: { box: "w-10 h-10", icon: "w-5 h-5" },
  md: { box: "w-12 h-12", icon: "w-6 h-6" },
  lg: { box: "w-14 h-14", icon: "w-6 h-6" },
};

export default function IconTile({ icon: Icon, size = "md", circle = false, className = "" }) {
  const { box, icon } = sizes[size];
  const shape = circle
    ? "rounded-full bg-white/5 border border-gold-500/30"
    : "rounded-xl bg-navy-950";

  return (
    <div className={`${box} ${shape} flex items-center justify-center shrink-0 ${className}`}>
      <Icon className={`${icon} text-gold-400`} aria-hidden="true" />
    </div>
  );
}
