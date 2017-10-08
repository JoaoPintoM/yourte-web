const initialAppState = {
  minPrice: 0,
  maxPrice: 1000
}

const searchReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'INIT_SEARCH':
      return { ...state }
    case 'SET_GEOPOSITION':
      return { ...state, lng: action.payload.lng, lat: action.payload.lat, label: action.payload.label }
    case 'SET_PRICE_RANGE':
      return { ...state, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice }
    case 'SET_FILTERS':
      return { ...state, filters: action.payload.filters }
    default:
      return state
  }
}

export default searchReducer
