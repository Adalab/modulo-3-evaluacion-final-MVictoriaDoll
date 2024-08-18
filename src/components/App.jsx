import '../styles/App.scss';
import logo from '../images/Logo_HarryPotter_png.png';
import { useState, useEffect } from "react";
import CharactersList from './characters/charactersList';


function App() {

  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        setCharacters(responseData);
      });

  }, []);


  return (
    <div className='page'>
      <header>
        <img src={logo} alt='Harry Potter Logo' className='harry-potter-logo'></img>
      </header>

      <main className='filters'>
        <form>
          <div className='form__character'>
            <label>Busca por Personaje</label>
            <div>
              <input type="text" name="characterSearch" id="characterSearch" />
            </div>
            <div className='form_house'>
              <label>Selecciona la casa</label>
              <div>
                <select name="houseSelect" id="houseSelect">
                  <option value="gryffindor">Gryffindor</option>
                  <option value="slytherin">Slytherin</option>
                  <option value="ravenclaw">Ravenclaw</option>
                  <option value="hufflepuff">Hufflepuff</option>
                </select>
              </div>
            </div>

          </div>
        </form>

        <CharactersList characters={characters} />

      </main>

      {/*<footer>
        despues vemos
      </footer>*/}
    </div>
  )
}

export default App;
