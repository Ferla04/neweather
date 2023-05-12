import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'name',
  initialState: {
    firstRender: true,
    onLoading: false,
    onError: false,
    data: {}
  },
  reducers: {
    changePage: (state) => {
      state.firstRender = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { changePage } = weatherSlice.actions
