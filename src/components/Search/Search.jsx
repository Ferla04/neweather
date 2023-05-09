import './Search.css'

const buttons = {
  Home: {
    text: 'Buscar',
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
          placeholder='Buscar sitio...'
          required
        />
      </article>

      <button className={`btn${typeButton}`}> {text} </button>
    </form>
  )
}
