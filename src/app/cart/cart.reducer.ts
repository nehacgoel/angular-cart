import { createReducer, on } from "@ngrx/store";
import { CartItem } from "./cart.model";
import { addToCart, removeFromCart } from "./cart.actions";

export const cartFeatureKey = 'cart';

export const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  initialState,

  on(addToCart, (state, { item }) => {
    console.log('[Reducer] AddToCart action fired - state', state);
    console.log('[Reducer] AddToCart action fired', item);
    const existing = state.find(i => i.id === item.id);
    if (existing) {
      const updated = state.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      console.log('[Reducer] Item exists, new state:', updated);
      return updated;
    }
    const newState = [...state, { ...item, quantity: 1 }];
    console.log('[Reducer] New item added, new state:', newState);
    return newState;
  }),

  on(removeFromCart, (state, { itemId }) => {
    console.log('[Reducer] RemoveFromCart fired, itemId:', itemId);
    const filtered = state.filter(item => item.id !== itemId);
    console.log('[Reducer] New state after removal:', filtered);
    return filtered;
  })
);