const initialAppState = { geoSearch: { label: 'Bruxelles, Belgique' } }

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'INIT_GEOSEARCH':
      return { ...state, geoSearch: 'Bruxelles, Belgique' }
    case 'SET_GEOSEARCH':
      return { ...state, geoSearch: action.payload }
    default:
      return state
  }
}

export default appReducer
