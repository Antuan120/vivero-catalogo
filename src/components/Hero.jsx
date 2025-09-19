export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=1600&auto=format&fit=crop"
          alt="Fondo de hojas"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 ring-1 ring-slate-200 px-3 py-1 text-sm">
          🌱 Vivero · Plantas felices, hogares verdes
        </span>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-bark">
          Descubre tu próxima planta favorita
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Suculentas, cactus, interiores y aromáticas seleccionadas para todos los espacios.
        </p>
      </div>
    </section>
  );
}
