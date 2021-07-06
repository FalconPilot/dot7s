import * as t from 'io-ts'

export const codecFromType = <T>() => <P extends {
  [k in keyof T]: t.Mixed
}>(
  props: P
): t.TypeC<P> => t.type(props)
