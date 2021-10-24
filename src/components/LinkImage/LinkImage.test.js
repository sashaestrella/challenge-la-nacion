import { render } from '@testing-library/react';
import LinkImage from './LinkImage';

describe('Test for LinkImage', () => {
  test('Rendering', () => {
    const { getByTestId } = render(<LinkImage />)
    expect(getByTestId('link-image')).toBeInTheDocument()
  })
})