import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css"

export default function Detail(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState("")

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    // <div style={{ backgroundColor: "lightgray" }}>
    <div className={styles.container}>
      <h1> DETAIL</h1>
      <h2>className={ styles.dataContainer.h2}{character.name}</h2>
      <div className={styles.dataContainer}>
        <h3>Status | {character.status}</h3>
        <h3>Specie | {character.species}</h3>
        <h3>Gender | {character.gender}</h3>
        <h3>Origin | {character.origin?.name}</h3>
      </div>
      <img
        className={styles.container.img}
        src={character.image}
        alt="character.name"
      />
    </div>
  );
}
