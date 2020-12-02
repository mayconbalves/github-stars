import { showSpinner, hideSpinner } from 'components/spinner/action'

export const GET_REPOS_SUCCESS = 'GET_REPOS'
export const GET_REPOS_ERROR = 'GET_REPOS_ERROR'

const getRepositories = (data) => {
  return { type: GET_REPOS_SUCCESS, payload: data }
}

const getRepositoriesError = (error) => {
  return { type: GET_REPOS_ERROR, payload: error }
}

export const fetchRepos = (user) => (dispatch) => {
  dispatch(showSpinner())
  fetch(`https://api.github.com/users/${user}/repos?per_page=1000`)
    .then((res) => res.json())
    .then((resp) => dispatch(getRepositories(resp)))
    .then(() => dispatch(hideSpinner()))
    .catch((error) => dispatch(getRepositoriesError(error)))
}
