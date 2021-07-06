export type NoOpAction = { type: 'NOOP' }

export type DataWithLifecycle<T> = {
  value: T | null
  loading: boolean
  error: Error | null
}
