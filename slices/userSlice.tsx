import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface userState {
  isLoggedIn:boolean
}


// Define the initial state using that type
const initialState: userState = {
  isLoggedIn:false
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login(state){
        state.isLoggedIn = true
    },

    logout(state){
      state.isLoggedIn = false
  }
  }
})

export const { login } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user.isLoggedIn

export default userSlice.reducer