import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About.jsx";
import Cards from "./components/cards/Cards.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Nav from "./components/nav/Nav.jsx";
import Favorites from "./components/favorites/Favorites"

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  //const EMAIL = "ejemplo@gmail.com";
  //const PASSWORD = "123456";

  const navigate = useNavigate();

  /* function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  } */
  // *** PROMESAS ***:
/* function login(userData) {
  const { email, password } = userData;
  const URL = "http://localhost:3001/rickandmorty/login/";
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    const { access } = data;
    setAccess(data);
    access && navigate("/home");
  });
} */
  async function login(userData) {
    try {
      const { email, password } = userData;
      //console.log(email, password)
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { access } = (await axios(URL + `?email=${email}&password=${password}`)).data
      setAccess(access);
      
      access && navigate("/home");
      //console.log(access)
      } catch (error) {
      console.log(error.message)
    }
}

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      // para evitar duplicados
      const characterId = characters.filter((character) => character.id === Number(id));
      if (characterId.length) return alert("The character ya existe!!");
      if (id < 1 || id > 826) return alert("No hay character con ese número");

      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
    } catch (error) {
      console.log(error.message)
    }
  };

// **** PROMESAS ***
  /* const onSearch = (id) => {
    const characterId = characters.filter(
      (character) => character.id === Number(id)
    );
    if (characterId.length) return alert("The character ya existe!!");
    if (id < 1 || id > 826) return alert("No hay character con ese número");
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }; */

  const onClose = (id) => {
    //setCharacters(characters.filter((caracter) => caracter.id !== Number(id)));
    setCharacters(characters.filter((caracter) => caracter.id !== id));
  };

  const location = useLocation();
  // console.log(location);

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      <hr />
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
