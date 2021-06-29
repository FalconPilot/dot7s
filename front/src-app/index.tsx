import * as React from 'react'
import { render } from 'react-dom'

import { App } from '$front/app/components'

const rootNodeId = 'root'
const rootNode = document.getElementById(rootNodeId)

if (!rootNode) {
  throw new Error(`[FRONT BOOT ERROR] - Root node "${rootNodeId}" was not found in DOM`)
}

render(<App />, rootNode)
