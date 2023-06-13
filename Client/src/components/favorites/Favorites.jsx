import { connect } from "react-redux";
import Card from "../card/Card.jsx";
//import styles from "./Favorites.module.css"
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions.js";
import { useState } from "react";

function Favorites({ myFavorites, onClose }) {
  const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };
  const dispatch = useDispatch()
  const [aux, setAux] = useState(false)

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="All">All</option>
      </select>
      <div style={cardsContainer}>
        {myFavorites?.map((fav) => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin?.name}
            image={fav.image}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
  
  
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
