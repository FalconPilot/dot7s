import { translationKeys } from '$front/constants'

import { ValuesOfArray } from './core'

export type TranslationKey = ValuesOfArray<typeof translationKeys>
