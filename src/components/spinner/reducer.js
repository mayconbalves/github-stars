import { HIDE_SPINNER, SHOW_SPINNER } from './action'

const initialState = {
  loading: false
}

export default function spinner(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        loading: true
      }
    case HIDE_SPINNER:
      return {
        ...state,
        loading: false
      }
    default:
      return initialState
  }
}
