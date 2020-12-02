import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Home from './'

describe('<Home />', () => {
  const mockStore = configureStore([thunk])
  let store
  store = mockStore({
    repositoriesReducer: { repos: [] },
    spinnerReducer: { loading: [] }
  })

  it('should render feedback message without repositories', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { title: 'No repository found' })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
