export type ValuesOf<T> = T[keyof T]

export type ValuesOfArray<T extends unknown[] | readonly unknown[]> = T[number]
