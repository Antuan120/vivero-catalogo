import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartCtx = createContext(null);
const STORAGE_KEY = "cart_v1";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { item, qty } = action.payload;
      const i = state.findIndex((x) => x.id === item.id);
      if (i >= 0) {
        const copy = [...state];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...state, { ...item, qty }];
    }
    case "SET_QTY": {
      const { id, qty } = action.payload;
      if (qty <= 0) return state.filter((x) => x.id !== id);
      return state.map((x) => (x.id === id ? { ...x, qty } : x));
    }
    case "REMOVE":
      return state.filter((x) => x.id !== action.payload.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(
    reducer,
    [],
    () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo(() => {
    const totalQty = items.reduce((s, i) => s + i.qty, 0);
    const totalPrice = items.reduce((s, i) => s + i.qty * Number(i.precio), 0);
    return {
      items,
      totalQty,
      totalPrice,
      addItem: (item, qty = 1) => dispatch({ type: "ADD", payload: { item, qty } }),
      setQty: (id, qty) => dispatch({ type: "SET_QTY", payload: { id, qty } }),
      removeItem: (id) => dispatch({ type: "REMOVE", payload: { id } }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [items]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export const useCart = () => useContext(CartCtx);
