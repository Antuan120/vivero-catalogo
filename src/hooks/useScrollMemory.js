import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let savedScroll = 0;

export function useScrollMemory() {
  const location = useLocation();

  useEffect(() => {
    // Si vuelvo al catálogo → aplicar scroll guardado
    if (location.pathname === "/catalogo") {
      window.scrollTo(0, savedScroll);
    }

    // Antes de salir del catálogo → guardar scroll
    return () => {
      if (location.pathname === "/catalogo") {
        savedScroll = window.scrollY;
      }
    };
  }, [location]);
}
