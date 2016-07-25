import { enabledLanguages, localizationData } from '../Intl/setup'

const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'

const initLocale = global.navigator && global.navigator.language || 'ko'
const initialState = {
  locale: initLocale,
  enabledLanguages,
  ...(localizationData[initLocale] || {}),
}

export default function IntlReducer (state = initialState, action) {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      const { type, ...actionWithoutType } = action; // eslint-disable-line
      return { ...state, ...actionWithoutType }
    }

    default:
      return state
  }
}

export const switchLanguage = newLang => ({
  type: SWITCH_LANGUAGE,
  ...localizationData[newLang],
})
