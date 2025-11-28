import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import SortSelect from "../components/SortSelect.jsx";
import TypeFilters from "../components/TypeFilters.jsx";
import PlantCard from "../components/PlantCard.jsx";
import PlantModal from "../components/PlantModal.jsx";
import useCatalog from "../hooks/useCatalog.js";
import plants from "../data/plants.js";
import Hero from "../components/Hero.jsx";

export default function Catalog() {
  const [preview, setPreview] = useState(null);
  const {
    q,
    setQ,
    tipos,
    seleccionTipos,
    toggleTipo,
    clearTipos,
    orden,
    setOrden,
    resultados,
  } = useCatalog(plants);

  return (

    
    <>
    
      <Hero />

      {/* Caja del buscador que se solapa suavemente con el hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 -mt-16 md:-mt-20">
        <div className="card p-4 md:p-5 shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <SearchBar value={q} onChange={setQ} />
            <SortSelect value={orden} onChange={setOrden} />
          </div>
          <div className="mt-4">
            <TypeFilters
              tipos={tipos}
              activos={seleccionTipos}
              onToggle={toggleTipo}
              onClear={clearTipos}
            />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-12">
        {resultados.length === 0 ? (
          <div className="card p-8 text-center text-slate-600">
            No encontramos plantas para tu búsqueda.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resultados.map((p) => (
              <PlantCard key={p.id} p={p} onOpen={setPreview} />
            ))}
          </div>
        )}
      </main>

      <PlantModal
        open={!!preview}
        planta={preview}
        onClose={() => setPreview(null)}
      />
    </>
  );
}
