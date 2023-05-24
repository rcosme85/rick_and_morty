import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharactersFav:[]
}
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV: return {
      ...state,
      myFavorites: [...state.allCharactersFav, payload],
      allCharactersFav: [...state.allCharactersFav, payload],
    };
    case REMOVE_FAV:
      const filterFav = state.myFavorites.filter(fav => fav.id !== Number(payload))
      return {
        ...state,
        myFavorites: filterFav
      };
    case FILTER:
      const allCharactersFavFilter = state.allCharactersFav.filter(character => character.gender === payload)
      return {
        ...state,
        myFavorites: payload === "All"
        ? [...state.allCharactersFav]
        : allCharactersFavFilter
      }
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav]
      return {
        ...state,
        myFavorites: payload === 'A'
          ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
          : allCharactersFavCopy.sort((a,b) =>b.id - a.id)
      }
    default:
      return { ...state };
  }
  
}