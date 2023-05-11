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
  const { text, direction } = buttons[typeButton]

  return (
    <form
      className='search'
      style={{ flexDirection: direction }}
    >
      <article>
        <input
          type='text'
          autoComplete='off'
          placeholder='Search for site...'
          required
        />
      </article>

      <button className={`btn${typeButton}`}> {text} </button>
    </form>
  )
}
