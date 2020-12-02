import { render, screen } from '@testing-library/react'
import Card from './'

describe('<Card />', () => {
  let props = {
    cloneUrl: 'https://github.com/mayconbalves/app-go-barber.git',
    license: {
      name: 'MIT license'
    },
    stars: 1,
    title: 'app go barber'
  }

  it('should render first title', () => {
    const { container } = render(<Card {...props} />)
    expect(screen.getByText(/Clone repo:/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render subtitle', () => {
    const { container } = render(<Card {...props} />)
    expect(screen.getByText(/License type:/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
