import { configureStore } from '@reduxjs/toolkit'
import AddFavorites from '../redux/slices/AddFavorites'

export const store = configureStore({
    reducer: {
        favorite: AddFavorites,
    },
})