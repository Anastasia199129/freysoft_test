// import {combineReducers} from 'redux'

// const initialState = {
//   usres: [],
//   btnFocus: {
//     calendar: false,
//     card: true
//   },
//   loading: false,
//   error: null,
// }

// const CARD_FOCUS = 'CARD_FOCUS'
// const CALENDAR_FOCUS = 'CALENDAR_FOCUS'


// export const btnFocusReduser = (state = initialState, action:{type: string, payload?: any}) => {
//   switch (action.type) {
//     case CARD_FOCUS:
//       return { ...state, btnFocus: { ...action.payload} };
//       break;

//       case CALENDAR_FOCUS:
//       return { ...state, btnFocus: { ...action.payload } };
//       break;
  
//     default:
//       break;
//   }
// }

// export const rootReducer = combineReducers({
//   btnFocus: btnFocusReduser
// })
