import { inject, Injectable } from "@angular/core";
import { removeFromCart, removeFromCartRequest } from "./cart.actions";
import { delay, map } from "rxjs";
import { createEffect, ofType, Actions } from "@ngrx/effects";


@Injectable()
export class CartEffects {
  private actions$ = inject(Actions);

  removeFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFromCartRequest),
      delay(500), // simulate API call delay
      map(action => {
        console.log('[Effect] Delayed removal for:', action.itemId);
        return removeFromCart({ itemId: action.itemId });
      })
    )
  );
}