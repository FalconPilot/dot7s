export const maybeCSS = <Props>(
  prop: string,
  value: string,
  propCond: (p: Props) => boolean
) => (p: Props): string =>
  propCond(p) ? `${prop}: ${value};` : ''
