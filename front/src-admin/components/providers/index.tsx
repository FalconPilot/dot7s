import * as React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from '$front/admin/store'

export const Providers: React.FunctionComponent = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
}
