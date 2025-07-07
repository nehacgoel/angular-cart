import { createAction, props } from "@ngrx/store";
import { CartItem } from "./cart.model";

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);

console.log('addToCart action created', addToCart);

/** The createAction function returns a function, that when called returns an object in the shape of the Action interface. 
 * The props method is used to define any additional metadata needed for the handling of the action. */

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ itemId: number }>()
);

export const removeFromCartRequest = createAction(
  '[Cart] Remove Item Request',
  props<{ itemId: number }>()
)

console.log('removeFromCart action created', removeFromCart);

