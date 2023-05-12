import debounce from 'just-debounce-it'
import { useCallback } from 'react'
import { useWeather } from '../../hooks'
import { Autocomplete } from '../Autocomplete/Autocomplete'
import './Search.css'

const buttons = {
  Home: {
    text: 'Search',
    direction: 'column'
  },
  Weather: {
    text: <i className='fa-solid fa-magnifying-glass' />,
    direction: 'row'
  }
}

export function Search ({ typeButton = 'Home' }) {
  const { onChangePage, onAutocomplete, getWeather, search, updateSearch } = useWeather()
  const { text, direction } = buttons[typeButton]

  const onSubmit = (event) => {
    event.preventDefault()
    if (typeButton === 'Home') onChangePage()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    getWeather({ query })
  }

  const debouncedGetMovies = useCallback(
    debounce(query => {
      onAutocomplete({ query })
    }, 300)
    , []
  )

  const handleChange = ({ target }) => {
    updateSearch({ search: target.value })
    debouncedGetMovies(target.value)
  }

  return (
    <form
      onSubmit={onSubmit}
      className='search'
      style={{ flexDirection: direction }}
    >
      <article>
        <input
          type='text'
          autoComplete='off'
          placeholder='Search for site...'
          name='query'
          value={search}
          required
          onChange={handleChange}
        />
        <Autocomplete />
      </article>

      <button className={`btn${typeButton}`}> {text} </button>
    </form>
  )
}
