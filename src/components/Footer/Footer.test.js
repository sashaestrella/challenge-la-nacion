import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Test for Footer', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<Footer />)
    expect(getByTestId('footer')).toBeInTheDocument()
  })
})