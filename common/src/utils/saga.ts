import * as TypedReduxSaga from 'typed-redux-saga'

export * from 'typed-redux-saga'

export const createSelect = <State>() =>
  function * select<T> (selector: (state: State) => T): Generator<unknown, T> {
    return yield * TypedReduxSaga.select<typeof selector>(selector)
  }

export default TypedReduxSaga

