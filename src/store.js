export const initialStore=()=>{
  return{
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_People':
      return {
        ...store,
        people: action.payload
      };
      case 'get_Planets':
        return {
          ...store,
          planets: action.payload
      };
      case 'get_Vehicles':
        return {
          ...store,
          vehicles: action.payload
      };
      case 'get_Favorites':
        return {
          ...store,
          favorites: action.payload
      };
    case 'add_Favorite':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }
    case 'remove_Favorite':
      return {
        ...store,
        favorites: store.favorites.filter(favorites => favorites.uid !== action.payload.uid)
      }
    default:
      throw Error('Unknown action.');
  }    
}
