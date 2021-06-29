import * as React from 'react'
import { render } from 'react-dom'

import { App, Providers } from '$front/admin/components'

const rootNodeId = 'root'
const rootNode = document.getElementById(rootNodeId)

if (!rootNode) {
  throw new Error(`[FRONT BOOT ERROR] - Root node "${rootNodeId}" was not found in DOM`)
}

const RootComponent: React.FunctionComponent = () => {
  return (
    <Providers>
      <App />
    </Providers>
  )
}

render(<RootComponent />, rootNode)
