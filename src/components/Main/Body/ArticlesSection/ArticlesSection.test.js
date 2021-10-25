import { render } from '@testing-library/react';
import { ARTICLES } from "../../../../dataDummy/articles.js";
import ArticlesSection from './ArticlesSection';

describe('Test for ArticlesSection', () => {
  test('Rendering', () => {
    const { getByTestId } = render(<ArticlesSection articles={ARTICLES}/>)
    expect(getByTestId('ArticlesSection')).toBeInTheDocument()
  })
})