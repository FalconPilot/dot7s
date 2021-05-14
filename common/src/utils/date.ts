export const formatWithDigits = (n: number, digicount: number): string => {
  const strnum = String(n)
  return `${'0'.repeat(digicount - strnum.length)}${strnum}`
}
