import { Search, Social } from '../../components'
import './Home.css'

export function Home ({ changePage }) {
  return (
    <div className='home'>
      <h1 className='title' translate='no'>NEWEATHER</h1>
      <p>Find out the weather somewhere in the world</p>
      <Search />
      <Social />
    </div>
  )
}
