import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

import userReducer from "./slices/user-slice";
import temporaryDataReducer from "./slices/temporary-data-slice";

export function createPersistStore() {
  const isServer = typeof window === "undefined";

  // Returns noop (dummy) storage for server-side rendering
  if (isServer) {
    return {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(),
      removeItem: () => Promise.resolve(),
    };
  }

  return createWebStorage("local");
}

const storage = createWebStorage("local");

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const middlewareOptions = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    whitelist: [persistedReducer],
    blacklist: [temporaryDataReducer],
  },
};

export const store = configureStore({
  reducer: { user: persistedReducer, temporaryData: temporaryDataReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareOptions),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
