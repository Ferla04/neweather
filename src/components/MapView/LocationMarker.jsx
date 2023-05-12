import { Marker, useMap } from 'react-leaflet'
import { iconMarker } from '../../utils'

export function LocationMarker ({ location }) {
  const map = useMap()
  if (location) map.flyTo(location, 9)

  return location
    ? (
      <Marker draggable position={location} icon={iconMarker} />
      )
    : null
}
