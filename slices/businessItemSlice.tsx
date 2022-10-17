import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface selectedState {
  isSelected:boolean
}


// Define the initial state using that type
const initialState: selectedState = {
    isSelected:false
}

export const businessItemSlice = createSlice({
  name: 'select',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSelected(state){
        if (!state.isSelected) {
            state.isSelected = true
            console.log('This button was selected',state.isSelected);
        }
    },

    setUnSelected(state){
        if (state.isSelected){
            state.isSelected = false
            console.log('This button was unselected',state.isSelected);
        }
    }

 
  }
})

export const { setSelected, setUnSelected } = businessItemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selected = (state: RootState) => state.select.isSelected

export default businessItemSlice.reducer