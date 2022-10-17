import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import selectReducer from './slices/businessItemSlice'

export const store = configureStore({
    reducer:{
        user: userReducer,
        select:selectReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch