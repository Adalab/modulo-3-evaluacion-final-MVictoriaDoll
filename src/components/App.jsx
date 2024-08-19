import '../styles/App.scss';
import logo from '../images/Logo_HarryPotter_png.png';
import { useState, useEffect } from "react";
import CharactersList from './characters/charactersList';
import CharacterFilterName from './characters/characterFilterName';


function App() {

  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const handleInputName = (ev) => {
    setNameFilter(ev.currentTarget.value);
  }

  console.log(nameFilter);


  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        setCharacters(responseData);
      });

  }, []);

  const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className='page'>
      <header>
        <img src={logo} alt='Harry Potter Logo' className='harry-potter-logo'></img>
      </header>

      <main className='filters'>
        <form>
         <CharacterFilterName 
         nameFilter={nameFilter}
         handleInputName={handleInputName}
          />
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
        </form>

        <CharactersList 
        characters={filteredCharacters}
         />

      </main>

      {/*<footer>
        despues vemos
      </footer>*/}
    </div>
  )
}

export default App;
