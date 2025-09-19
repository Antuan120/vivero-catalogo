import { Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Catalog from "./pages/Catalog.jsx";
import PlantDetail from "./pages/PlantDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import { CartProvider, useCart } from "./context/CartContext.jsx";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} By Antuan Peñaranda.
      </div>
    </footer>
  );
}

// Badge de carrito en la navbar (cuenta)
function CartBadge() {
  const { totalQty } = useCart() || { totalQty: 0 };
  return (
    <Link to="/carrito" className="relative chip">
      Carrito
      {totalQty > 0 && (
        <span className="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center">
          {totalQty}
        </span>
      )}
    </Link>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar rightSlot={<CartBadge />} />
        <Routes>
          <Route path="/" element={<Navigate to="/catalogo" replace />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/planta/:id" element={<PlantDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<div className="p-6">404</div>} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}
