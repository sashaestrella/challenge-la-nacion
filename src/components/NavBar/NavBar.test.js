import { render, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('Test for NavBar', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<NavBar />)
    expect(getByTestId('navbar')).toBeInTheDocument()
    expect(getByTestId('LogoLaNacion')).toBeInTheDocument()
    expect(getByTestId('suscribe')).toBeInTheDocument()
  })

  test('onClick event', () => {
    const {getByTestId} = render(<NavBar />)

    //Sections
    const buttonSections = getByTestId('Button-sections')
    expect(buttonSections.textContent).toBe('SECCIONES')
    fireEvent.click(buttonSections)
    expect(buttonSections.textContent).toBe('SECCIONES')

    //Search
    const buttonSearch = getByTestId('Button-search')
    expect(buttonSearch.textContent).toBe('BUSCAR')
    fireEvent.click(buttonSearch)
    expect(buttonSearch.textContent).toBe('BUSCAR')

    //Sign in
    const buttonSignin = getByTestId('Button-signin')
    expect(buttonSignin.textContent).toBe('INGRESAR')
    fireEvent.click(buttonSignin)
    expect(buttonSignin.textContent).toBe('INGRESAR')
  })
})