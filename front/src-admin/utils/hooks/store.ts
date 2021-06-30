import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, AppState } from '$front/admin/store/types'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppStore: TypedUseSelectorHook<AppState> = useSelector
