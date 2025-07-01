import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartItem } from "./cart.model";
import { cartFeatureKey } from "./cart.reducer";

export const selectCartState = createFeatureSelector<CartItem[]>(cartFeatureKey);

export const selectCartItems = createSelector(
  selectCartState,
  state => state
);

export const selectTotalItems = createSelector(
  selectCartState,
  state => state.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
  selectCartState,
  state => state.reduce((sum, item) => sum + item.price * item.quantity, 0)
);