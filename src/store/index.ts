// src/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import noopStorage  from '../util/customStorage';


import persistedReducer from './slices/persistedslice';
import defaultReducer from './slices/defaultslice';

const persistConfig = {
  key: 'root',
  storage: typeof window !== 'undefined' ? storage : noopStorage,
  whitelist: ['persisted'], // only persisted will be persisted
};

const rootReducer = combineReducers({
  persisted: persistedReducer,
  default: defaultReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
