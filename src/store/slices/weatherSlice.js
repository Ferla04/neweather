import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'name',
  initialState: {
    search: '',
    firstRender: true,
    loading: false,
    error: false,
    data: {},
    autocomplete: []
  },
  reducers: {
    changePage: (state) => {
      state.firstRender = false
    },
    onListAutocomplete: (state, { payload }) => {
      state.autocomplete = payload.autocomplete
    },
    onLoading: (state) => {
      state.loading = true
      state.error = null
      state.autocomplete = []
      state.search = ''
    },
    onError: (state, { payload }) => {
      state.loading = false
      state.payload = payload.error
    },
    getResults: (state, { payload }) => {
      state.loading = false
      state.error = null
      state.autocomplete = []
      state.search = ''
      state.data = payload.data
    },
    changeSearch: (state, { payload }) => {
      state.search = payload.search
    }
  }
})

// Action creators are generated for each case reducer function
export const { changePage, onListAutocomplete, onLoading, onError, getResults, changeSearch } = weatherSlice.actions
