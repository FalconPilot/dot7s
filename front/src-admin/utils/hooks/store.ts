import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '$front/admin/store/types/core'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppStore: TypedUseSelectorHook<RootState> = useSelector
