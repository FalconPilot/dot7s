export const isBoolean = (x: unknown): x is boolean =>
  typeof x === 'boolean'

export const booleanWithDefault = <T>(value: boolean | T, defaultValue: T): T =>
  isBoolean(value) ? defaultValue : value
