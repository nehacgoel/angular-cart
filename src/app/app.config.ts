import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { cartFeatureKey, cartReducer } from './cart/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { CartEffects } from './cart/cart.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore(), 
    provideState(cartFeatureKey, cartReducer), //register store and state
    provideEffects(CartEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
