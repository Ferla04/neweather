import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationMarker } from './LocationMarker'
import 'leaflet/dist/leaflet.css'
import './MapView.css'
import { useWeather } from '../../hooks'

let location = { lat: 4.6769958, lng: -74.0887461 }
const ZOOM_LEVEL = 7

export function MapView () {
  const { data } = useWeather()

  if (data?.lat !== undefined) {
    location = {
      lat: data.lat,
      lng: data.lng
    }
  }

  return (
    <div className='mapview'>
      <MapContainer zoom={ZOOM_LEVEL} center={location}>
        <TileLayer url='https://api.mapbox.com/styles/v1/juanerq/cl3qrtpca000516o3p6rshczh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianVhbmVycSIsImEiOiJjbDNxcndkbXcxYXcwM2xwYTZrcnNrN3FpIn0.oj6BG5fMC3HkQiOo7uBPKA' />
        <LocationMarker location={location} />
      </MapContainer>
    </div>
  )
}
