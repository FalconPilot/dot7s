import { User } from '@prisma/client'

import { RouterFunction } from '$back/types'
import { renderErrorPage } from '$back/utils'

export const userRouter: RouterFunction = (app, env, client) => {
  // GET User
  app.get('/user/:id', async (req, res) => {
    const userId: number = parseInt(req.params.id, 10)

    if (isNaN(userId)) {
      return renderErrorPage(res, {
        code: 500,
        message: 'UserID should be a number'
      })
    }

    const user: User | null = await client.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return renderErrorPage(res, {
        code: 404,
        message: 'User not found'
      })
    }

    res.json(user)
  })
}
