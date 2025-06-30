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
 * Actions describe unique events that are dispatched from components and services.
 * State changes are handled by pure functions called reducers that take the current state and the latest action to compute a new state.
 * selectors are pure functions used to select, derive and compose pieces of state.
 * State is accessed with the Store, an observable of state and an observer of actions.
 */