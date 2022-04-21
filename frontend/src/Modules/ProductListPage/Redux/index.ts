import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IVitrineState, IPayloadProps } from './types'

export const initialState: IVitrineState = {
  vitrineItemSelector: {
    id: '',
    model: '',
    make: '',
    year: 0,
    image: {
      url: ''
    }
  }
}

export const VitrineSlice = createSlice({
  name: 'vitrine',
  initialState,
  reducers: {
    setVitrineItemSelector: (
      state: IVitrineState,
      action: PayloadAction<IPayloadProps>
    ) => {
      state.vitrineItemSelector = action.payload
    }
  }
})

export const { setVitrineItemSelector }: any = VitrineSlice.actions

export default VitrineSlice.reducer
