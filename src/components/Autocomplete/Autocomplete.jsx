import { useWeather } from '../../hooks'
import './Autocomplete.css'

export function Autocomplete () {
  const { autocomplete, firstRender, onChangePage, getWeather } = useWeather()

  const handleClick = (query) => {
    if (firstRender) onChangePage()
    getWeather({ query })
  }

  return (
    <section className='autocomplete'>
      {
        autocomplete?.map(({ id, city, country }) => (
          <li key={id} className='result' onClick={() => handleClick(`${country},${city}`)}>
            <p>{country}, {city}</p>
          </li>
        ))
      }
    </section>
  )
}
