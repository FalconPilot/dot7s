import * as React from 'react'

export const HeaderView: React.FunctionComponent<{
  isOnRoot: boolean
  backToRoot: () => void
}> = ({
  isOnRoot,
  backToRoot
}) => {
  return (
    <header>
      <h1>Dot7S - Admin</h1>
      {isOnRoot ? null : <button onClick={backToRoot}>Home</button>}
    </header>
  )
}
