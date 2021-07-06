import { isString } from './string'

export type ValuesOf<T> = T[keyof T]

export type ValuesOfArray<T extends unknown[] | readonly unknown[]> = T[number]

export type ArgumentsType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any ? A : never

type NonObjectKeysOf<T> = {
  [K in keyof T]: T[K] extends Array<any> ? 
    K : 
    T[K] extends object ? never : K
}[keyof T]

type ObjectValuesOf<T> = Exclude<
  Extract<ValuesOf<T>, object>, 
  Array<any>
>

type UnionToIntersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
  ? I
  : never

export type Flatten<T> = Pick<T, NonObjectKeysOf<T>> &
  UnionToIntersection<ObjectValuesOf<T>>

export const isEnum = <T extends Record<string, string>>(enumStruct: T) => (x: unknown): x is T =>
  isString(x) &&
  Object.values<string>(enumStruct).includes(x)
