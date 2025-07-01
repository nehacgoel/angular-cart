/** 
 * NGRX-STORE - @ngrx/store
 * - Global state management for Angular applications
 * - Provides a reactive state container
 * - Uses Redux pattern for state management
 * - Supports immutability and unidirectional data flow
 * - Integrates with Angular's dependency injection
 * - Allows for time-travel debugging and state persistence
 * - Provides powerful tools for managing complex state interactions
 * - Supports lazy loading of feature states
 * - Enables efficient change detection and performance optimization
 * - Works well with Angular's reactive programming model
 * - Provides a clear separation of concerns between state and UI
 * - Facilitates testing and debugging of state changes
 * - Offers a robust ecosystem with additional libraries like @ngrx/effects, @ngrx/entity, and @ngrx/store-devtools
 * - Encourages best practices for state management in Angular applications
 * - Provides a scalable solution for managing application state as it grows in complexity
 * - Supports both synchronous and asynchronous state updates
 * - Allows for easy integration with Angular's HttpClient for API interactions
*/

/**
 * KEY CONCEPTS
  - Actions describe unique events that are dispatched from components and services.
  - Actions are plain objects with a type property and an optional payload.

 - Reducers- responsible for handling transitions from one state to the next state in your application. 
 Reducer functions handle these transitions by determining which actions to handle based on the action's type.
 Reducers are pure functions that take the current state and an action, and return a new state.

 * selectors are pure functions used to select, derive and compose pieces of state.
 * State is accessed with the Store, an observable of state and an observer of actions.
 */

/**
 * 
 ng add @ngrx/store@latest
    adds the NgRx Store library  — the main library that lets  manage global application state in a Redux-style pattern

 ng add @ngrx/store-devtools@latest
    Adds browser debugging support via Redux DevTools Extension.
    So when you use the Chrome/Firefox Redux DevTools, you can:
    See all dispatched actions
    Inspect current store state
    Time-travel through app state (undo/redo)
    Debug NgRx behavior visually
 
 */