import { render, screen } from '@testing-library/react'
import Home from '.'

test('renders home title', () => {
  render(<Home />)
  const title = screen.getByText(/hello world/)
  expect(title).toBeInTheDocument()
})
