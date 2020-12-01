import { render, screen } from '@testing-library/react'
import Feedback from './'

describe('<Feedback />', () => {
  let props = {
    message: 'Not Found'
  }

  it('should render message', () => {
    const { container } = render(<Feedback {...props} />)
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
