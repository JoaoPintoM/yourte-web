const initialAppState = {
  geoSearch: {
    label: 'Bruxelles, Belgique',
    location: {lat: 50.8503396, lng: 4.351710300000036}
  },
  localUser: { isAuth: 'pikachu' },
  localstorage: []
}

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'INIT_GEOSEARCH':
      return { ...state }
    case 'SET_GEOSEARCH':
      return { ...state, geoSearch: action.payload }
    case 'GET_GEOSEARCH':
      return { ...state }
    case 'GET_LOCALSTORAGE':
      return { ...state }
    case 'SET_LOCALSTORAGE':
      return { ...state, localstorage: action.payload.localstorage }
    case 'GET_LOCAL_USER':
      return { ...state, localUser: action.payload }
    case 'GET_LOCAL_USER_ERROR':
      return { ...state, localUser: { isAuth: false } }
    case 'REMOVE_LOCAL_USER':
      return { ...state, localUser: { isAuth: false } }
    default:
      return state
  }
}

export default appReducer
