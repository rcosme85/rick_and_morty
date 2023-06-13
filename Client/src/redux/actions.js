import { REMOVE_FAV, FILTER, ORDER } from "./types";
import axios from "axios";
 const endpoint = "http://localhost:3001/rickandmorty/fav";
/* export function addFav(character) {
  return {
    type: ADD_FAV,
    payload: character
  }
} */
export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character)
      if (!data.length) throw Error("No hay favoritos")
      return dispatch({
          type: "ADD_FAV",
          payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};
// **** PROMESAS ****
/* export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    });
  };
}; */

/* export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id
  }
} */
export const removeFav = (id) => {
  //const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${endpoint}/${id}`);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
};
// ***** PROMESAS ****
/* export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
}; */

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender
  }
}

export function orderCards(orden) {
  return {
    type: ORDER,
    payload: orden
  }
}