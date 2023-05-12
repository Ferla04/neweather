import { useDispatch, useSelector } from 'react-redux'
import { changePage, changeSearch, getResults, onError, onListAutocomplete, onLoading } from '../store'
import { searchAutocomplete, searchWeather } from '../services'

export const useWeather = () => {
  const { search, firstRender, autocomplete, loading, data, error } = useSelector(state => state.weatherStore)
  const dispatch = useDispatch()

  const onChangePage = () => {
    dispatch(changePage())
  }

  const updateSearch = ({ search }) => {
    dispatch(changeSearch({ search }))
  }

  const onAutocomplete = async ({ query = '' }) => {
    const list = await searchAutocomplete({ query })
    dispatch(onListAutocomplete({ autocomplete: list }))
  }

  const getWeather = async ({ query = '' }) => {
    if (!query) return

    try {
      dispatch(onLoading())

      const infoWeather = await searchWeather({ query })
      dispatch(getResults({ data: infoWeather }))
    } catch (error) {
      dispatch(onError({ error: error.message }))
    }
  }

  return {
    //* Props
    data,
    firstRender,
    autocomplete,
    search,
    loading,
    error,

    //* Funcs
    onAutocomplete,
    onChangePage,
    getWeather,
    updateSearch
  }
}
