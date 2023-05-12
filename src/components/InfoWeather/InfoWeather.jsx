import { useWeather } from '../../hooks'
import { Spinner } from '../Spinner/Spinner'
import './InfoWeather.css'

export function InfoWeather () {
  const { data, loading } = useWeather()
  const { conditionText, temperature, country, locationName, humidity, windSpeed, feelsLike, icon } = data

  if (loading) return <Spinner />

  return (
    <section className='info'>
      <div className='temperature'>
        <span>{`${temperature}°`}</span>
        <img src={icon} alt='weather' />
        <span>{conditionText}</span>
      </div>
      <p>{`${country}, ${locationName}`}</p>
      <div>
        <p>Humidity: <span>{humidity}%</span></p>
        <p>WindSpeed: <span>{windSpeed}km/h</span></p>
        <p>FeelsLike: <span>{feelsLike}°</span></p>
      </div>
    </section>
  )
}
