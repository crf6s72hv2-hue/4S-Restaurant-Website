type LogoProps = {
  className?: string;
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-lg font-bold text-ember-400 shadow-lg shadow-teal-900/40 ring-1 ring-white/10">
        4S
      </span>
      <span className="flex flex-col leading-none">
        <span className="heading text-xl font-semibold text-white">4S</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal-300">
          Restaurant &amp; Café
        </span>
      </span>
    </div>
  );
}
