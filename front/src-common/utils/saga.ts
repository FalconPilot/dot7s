import * as TypedReduxSaga from 'typed-redux-saga'
import { ForkEffect } from 'redux-saga/effects'

export const effectsCreator = <
  State,
  ActionTypeKey extends string,
  ActionType extends { type: ActionTypeKey }
>() => ({
  all: TypedReduxSaga.all,
  call: TypedReduxSaga.call,
  put: function * (action: ActionType): Generator {
    return yield * TypedReduxSaga.put(action)
  },
  select: function * <T> (selector: (state: State) => T): Generator<unknown, T> {
    return yield * TypedReduxSaga.select<typeof selector>(selector)
  },
  takeEvery: function * <P extends ActionTypeKey | ActionTypeKey[], Func extends (action: ActionType) => void>(
    pattern: P,
    worker: Func
  ): Generator<unknown, ForkEffect<never>> {
    return yield * TypedReduxSaga.takeEvery(pattern, worker)
  }
})
