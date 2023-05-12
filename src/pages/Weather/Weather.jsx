import { InfoWeather, MapView, Search } from '../../components'
import './Weather.css'

export function Weather () {
  return (
    <>
      <div className='weather'>
        <nav>
          <h1 className='title' translate='no'>NEWEATHER</h1>
          <Search typeButton='Weather' />
        </nav>
        <main className='contInfo'>
          <InfoWeather />
        </main>
      </div>
      <MapView />
    </>
  )
}
