import { Home, Weather } from './pages'
import { useWeather } from './hooks'

function App () {
  const { firstRender } = useWeather()

  return (
    <>
      {
        firstRender
          ? <Home />
          : <Weather />
      }
    </>
  )
}

export default App
