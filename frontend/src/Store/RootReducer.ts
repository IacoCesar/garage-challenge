import VitrineReducer from '@/Modules/ProductListPage/Redux'
import ThemeReducer from '@/Redux/Theme'
import { combineReducers } from '@reduxjs/toolkit'

export const RootReducers = combineReducers({
  vitrine: VitrineReducer,
  themeData: ThemeReducer
})
