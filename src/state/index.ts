import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
