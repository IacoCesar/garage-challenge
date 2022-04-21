import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IThemeState } from './types'

export const initialState: IThemeState = {
  theme: 'default'
}

export const ThemeSlice = createSlice({
  name: 'themeData',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeTheme } = ThemeSlice.actions

export default ThemeSlice.reducer
