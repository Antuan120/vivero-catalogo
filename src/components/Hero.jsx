  export default function Hero() {
    return (
      <section className="relative overflow-hidden bg-white">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src="/images/imagenHero.png"
            alt="Fondo de hojas"
            className="h-full w-full object-cover"
          />
          {/* Degradado que se funde con el fondo blanco y conecta con el buscador */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-white/60 to-white" />
        </div>

        {/* Contenido */}
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-28 md:pt-20 md:pb-32">
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
