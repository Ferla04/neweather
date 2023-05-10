import { Search, Social } from '../../components'
import './Home.css'

export function Home () {
  return (
    <div className='home'>
      <h1 className='title' translate='no'>NEWEATHER</h1>
      <p> Averigua el clima de algún lugar del mundo </p>
      <Search />
      <Social />
    </div>
  )
}
