export type ValueOf<T> = T[keyof T]

export type ValuesOfArray<T extends unknown[] | readonly unknown[]> = T[number]

export const isString = (x: unknown): x is string => typeof x === 'string'

export const isEnum = <T extends Record<string, string>>(enumStruct: T) => (x: unknown): x is T =>
  isString(x) &&
  Object.values<string>(enumStruct).includes(x)
