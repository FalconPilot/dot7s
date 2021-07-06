import { DataWithLifecycle, NoOpAction } from '$front/common/types'

export const lifecycle = {
  emptyData: <T>(): DataWithLifecycle<T> => ({
    value: null,
    loading: false,
    error: null
  }),
  startLoading: <T>(): DataWithLifecycle<T> => ({
    value: null,
    loading: true,
    error: null
  }),
  loadingSuccess: <T>(value: T): DataWithLifecycle<T> => ({
    value,
    loading: false,
    error: null
  }),
  loadingError: <T>(
    previousValue: T | null,
    error: Error
  ): DataWithLifecycle<T> => ({
    value: previousValue,
    loading: false,
    error
  })
}

export const updateState = <State>(updates: Partial<State>[]) => (state: State): State =>
  updates.reduce<State>((acc, struct) => ({
    ...acc,
    ...struct
  }), state)

export const noOpAction: NoOpAction = { type: 'NOOP' }

const isNoOpAction = (x: { type: string }): x is NoOpAction =>
  x.type === noOpAction.type

export const reducerCreator = <
  AppActionType extends { type: string }
>() => <
  State,
  ActionType extends AppActionType
>(
  initialState: State,
  typeguard: (x: AppActionType) => x is ActionType,
  switchFunc: (state: State, action: ActionType) => State
) => (
  state: State = initialState,
  action: AppActionType | NoOpAction = noOpAction
): State => {
  // If the action isn't a NoOp and is recognized,
  // return the altered state
  if (!isNoOpAction(action) && typeguard(action)) {
    return switchFunc(state, action)
  }

  // If action is NoOp or somehow unrecognized,
  // return the unaltered state
  return state
}

export const lifecycleActions = <NameSpace extends string, Prefix extends string>(
  namespace: NameSpace,
  prefix: Prefix
) => <T>() => ({
  startLoading: () => ({
    namespace,
    type: `${namespace}/${prefix}/LOADING_START`
  }) as const,
  loadingSuccess: (payload: T) => ({
    namespace,
    type: `${namespace}/${prefix}/LOADING_SUCCESS`,
    payload
  }) as const,
  loadingError: (error: Error) => ({
    namespace,
    type: `${namespace}/${prefix}/LOADING_ERROR`,
    payload: error
  }) as const
})
