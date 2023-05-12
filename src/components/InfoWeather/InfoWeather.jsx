import { useWeather } from '../../hooks'
import { getImgInfoFromUrl } from '../../utils'
import { ErrorMessage } from '../Error/ErrorMessage'
import { Spinner } from '../Spinner/Spinner'
import './InfoWeather.css'

export function InfoWeather () {
  const { data, loading, error } = useWeather()
  const { conditionText, temperature, country, region, locationName, humidity, windSpeed, feelsLike, icon } = data

  if (loading) return <Spinner />
  if (error) return <ErrorMessage problem={error} />

  const iconPixel = getImgInfoFromUrl(icon)

  return (
    <section className='info'>
      <div className='temperature'>
        <span>{`${temperature}°`}</span>
        <img src={iconPixel} alt='weather' />
        <span>{conditionText}</span>
      </div>
      <p>{`${country}, ${region}, ${locationName}`}</p>
      <div>
        <p>Humidity: <span>{humidity}%</span></p>
        <p>WindSpeed: <span>{windSpeed}km/h</span></p>
        <p>FeelsLike: <span>{feelsLike}°</span></p>
      </div>
    </section>
  )
}
