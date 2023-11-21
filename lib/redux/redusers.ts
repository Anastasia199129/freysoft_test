import { combineReducers } from 'redux'

import data from '@/public/data/charts.json'

import { CARD_FOCUS, CALENDAR_FOCUS, SELECT_YEAR, SELECT_DATA } from './types'

const initialState = {
  data,
  selectedData: data.filter((el) => el.year === '2022'),
  btnFocus: {
    calendar: false,
    card: true,
  },
  year: '2022',
}

export const btnFocusReduser = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case CARD_FOCUS:
      return { ...state, btnFocus: action.payload }
    case CALENDAR_FOCUS:
      return { ...state, btnFocus: action.payload }
    default:
      return state
  }
}

export const selectYearReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SELECT_YEAR:
      return { ...state, year: action.payload }
    default:
      return state
  }
}

export const selectDataByYearReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case SELECT_DATA:
      const newData = data.filter((el) => el.year === action.payload)
      return {
        ...state,
        selectedData: newData[0],
      }
    default:
      return state
  }
}

export const rootReducers = combineReducers({
  selectedData: selectDataByYearReducer,
  btnFocus: btnFocusReduser,
  selectedYear: selectYearReducer,
})
