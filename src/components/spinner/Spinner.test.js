import { render } from '@testing-library/react'
import Spinner from './'

describe('<Spinner />', () => {
  it('should render Spinner', () => {
    const { container, getByTestId } = render(<Spinner />)
    expect(getByTestId('spinner')).not.toBeNull()
    expect(container.firstChild).toMatchSnapshot()
  })
})
