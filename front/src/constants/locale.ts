// Character GUI elements
const characterTranslationKeys = [
  'CHAR_fighter'
] as const

// Items
const itemTranslationKeys = [
  'ITEM_rustySword'
] as const

// Merge and export all translation keys
export const translationKeys = [
  ...characterTranslationKeys,
  ...itemTranslationKeys
] as const
