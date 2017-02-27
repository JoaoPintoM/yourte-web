const initialAppState = {
  geoSearch: {
    label: 'Bruxelles, Belgique',
    location: {lat: 50.8503396, lng: 4.351710300000036}
  }
}

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'INIT_GEOSEARCH':
      return { ...state }
    case 'SET_GEOSEARCH':
      return { ...state, geoSearch: action.payload }
    default:
      return state
  }
}

export default appReducer
