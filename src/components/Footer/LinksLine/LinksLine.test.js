import { render } from '@testing-library/react';
import { LINKS } from "../../../dataDummy/footer.js";
import LinksLine from './LinksLine';

describe('Test for LinksLine', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<LinksLine links={LINKS.sections} name="SECCIONES"/>)
    expect(getByTestId('link-line')).toBeInTheDocument()
  })
})