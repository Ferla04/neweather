import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../store'

export const useWeather = () => {
  const { firstRender } = useSelector(state => state.weatherStore)
  const dispatch = useDispatch()

  const onChangePage = () => {
    dispatch(changePage())
  }

  return {
    onChangePage,
    firstRender
  }
}
