import { API_URL, OPTIONS_WEATHER_API } from '../contants'

export const searchWeather = async ({ query }) => {
  if (query === '') return null

  try {
    const response = await fetch(`${API_URL}current.json?q=${query}`, OPTIONS_WEATHER_API)
    const data = await response.json()
    const error = data?.error ?? null

    if (error) throw new Error(error)

    const { current, location } = data
    return {
      conditionText: current.condition.text,
      country: location.country,
      feelsLike: current.feelslike_c,
      humidity: current.humidity,
      icon: current.condition.icon,
      locationName: location.name,
      temperature: current.temp_c,
      region: location.region,
      windSpeed: current.wind_kph,
      lng: location.lon,
      lat: location.lat
    }
  } catch (error) {
    throw new Error('Error searching site')
  }
}

export const searchAutocomplete = async ({ query }) => {
  if (query === '') return null

  try {
    const response = await fetch(`${API_URL}search.json?q=${query}`, OPTIONS_WEATHER_API)
    const data = await response.json()
    const newData = data.slice(0, 5)

    return newData?.map(({ id, name, country, region }) => ({
      id, city: name, country, region
    }))
  } catch (error) {
    console.log(error)
    throw new Error('Error searching autocompleted')
  }
}
