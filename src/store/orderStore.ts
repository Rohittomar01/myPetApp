import { create } from 'zustand';

interface Order {
  id: number;
  items: any[];
  total: number;
  date: string;
}

interface OrderState {
  orders: Order[];
  addOrder: (order: Order) => void;
}

export const useOrderStore = create<OrderState>(set => ({
  orders: [],
  addOrder: order =>
    set(state => ({
      orders: [order, ...state.orders],
    })),
}));
