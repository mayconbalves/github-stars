import { GET_REPOS_SUCCESS, GET_REPOS_ERROR } from './action'

const initialState = {
  repos: [],
  error: null
}

export default function repos(state = initialState, action) {
  switch (action.type) {
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        error: null
      }
    case GET_REPOS_ERROR:
      return {
        repos: [],
        error: action.payload
      }
    default:
      return state
  }
}
