import { render } from '@testing-library/react';
import { ARTICLES } from "../../../dataDummy/articles.js";
import Body from './Body';

describe('Test for Body', () => {
  test('Rendering', () => {
    const { getByTestId } = render(<Body articles={ARTICLES}/>)
    expect(getByTestId('Body')).toBeInTheDocument()
  })
})