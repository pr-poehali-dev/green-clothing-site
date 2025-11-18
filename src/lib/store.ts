import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (item) => {
        set((state) => {
          const existingItem = state.cart.find(
            (i) => i.id === item.id && i.size === item.size
          );
          
          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id && i.size === item.size
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          
          return {
            cart: [...state.cart, { ...item, quantity: 1 }],
          };
        });
      },
      
      removeFromCart: (id, size) => {
        set((state) => ({
          cart: state.cart.filter((item) => !(item.id === id && item.size === size)),
        }));
      },
      
      updateQuantity: (id, size, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id, size);
          return;
        }
        
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.size === size
              ? { ...item, quantity }
              : item
          ),
        }));
      },
      
      clearCart: () => {
        set({ cart: [] });
      },
      
      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
