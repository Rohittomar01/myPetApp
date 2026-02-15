import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  breed: string;
  price: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void; // 👈 NEW
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: item =>
    set(state => ({
      cart: [...state.cart, item],
    })),

  removeFromCart: id =>
    set(state => ({
      cart: state.cart.filter(item => item.id !== id),
    })),

  clearCart: () =>
    set({
      cart: [],
    }),

  getTotal: () => get().cart.reduce((total, item) => total + item.price, 0),
}));
