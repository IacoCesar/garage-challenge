import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import storage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import { RootReducers } from './RootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['vitrine', 'themeData']
}

const persistedReducer = persistReducer(persistConfig, RootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
