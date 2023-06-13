import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
  errors: false
}
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    /* case ADD_FAV: return {
      ...state,
      myFavorites: [...state.allCharactersFav, payload],
      allCharactersFav: [...state.allCharactersFav, payload],
    }; */
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharactersFav: payload, errors: false };
    case "ERROR":
      return{...state, errors:payload}

    /* case REMOVE_FAV:
      const filterFav = state.myFavorites.filter(
        (fav) => fav.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: filterFav,
      }; */
    case REMOVE_FAV:
      return { ...state, myFavorites: payload, errors:false};
    
    case FILTER:
      const allCharactersFavFilter = state.allCharactersFav.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "All"
            ? // ? [...state.allCharactersFav]
              [...state.allCharactersFav]
            : allCharactersFavFilter,
      };
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
  
}