import { useWeather } from '../../hooks'
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
  const { onChangePage } = useWeather()
  const { text, direction } = buttons[typeButton]

  const onSubmit = (event) => {
    event.preventDefault()
    if (typeButton === 'Home') onChangePage()
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
          // required
        />
      </article>

      <button className={`btn${typeButton}`}> {text} </button>
    </form>
  )
}
