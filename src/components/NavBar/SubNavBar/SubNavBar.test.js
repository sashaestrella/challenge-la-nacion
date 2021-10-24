import { render, fireEvent } from '@testing-library/react';
import SubNavBar from './SubNavBar';

describe('Test for SuvNavBar', () => {
  test('Rendering', () => {
    const {getByTestId} = render(<SubNavBar />)
    expect(getByTestId('sub-navbar')).toBeInTheDocument()
    expect(getByTestId('dolar')).toBeInTheDocument()
    expect(getByTestId('weather')).toBeInTheDocument()
  })

  test('onClick event', () => {
    const {getByTestId} = render(<SubNavBar />)

    //News letters
    const buttonNews = getByTestId('news-letters')
    expect(buttonNews.textContent).toBe('Recibí Newsletters')
    fireEvent.click(buttonNews)
    expect(buttonNews.textContent).toBe('Recibí Newsletters')

    //Club La Nación
    const buttonClubNacion = getByTestId('club-nacion')
    expect(buttonClubNacion.textContent).toBe('Descubrí tus beneficios')
    fireEvent.click(buttonClubNacion)
    expect(buttonClubNacion.textContent).toBe('Descubrí tus beneficios')
  })
})