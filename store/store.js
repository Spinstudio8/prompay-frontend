import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slice/userSlice';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = { key: 'root', storage, version: 2 };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export const RootState = store.getState();
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const AppDispatch = store.dispatch;

export const persistor = persistStore(store, () => {
  // This callback is called after the rehydration is complete
  console.log('Rehydration complete.');
});

// to clear the store
// persistor.purge();

// // Wait for the store to be rehydrated before rendering your app
// persistor.subscribe(() => {
//   const { isHydrated } = persistor.getState();
//   if (isHydrated) {
//     // Render your app here
//     console.log('Hydrated');
//   }
// });

export default store;
