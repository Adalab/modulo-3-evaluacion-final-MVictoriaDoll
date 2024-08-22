import '../styles/App.scss';
import logo from '../images/Logo_HarryPotter_png.png';
import { useState, useEffect } from "react";
import CharactersList from './characters/charactersList';
import CharacterFilterName from './characters/characterFilterName';
import CharacterFilterHouse from './characters/characterFilterHouse.jsx';
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './characters/CharacterDetail.jsx';



function App() {

  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('gryffindor');


const handleFormSubmit = (ev) => {
  ev.preventDefault(); 
};


  const handleInputName = (ev) => {
    setNameFilter(ev.currentTarget.value);
   
  }


  const handleChangeHouseFilter = (ev) => {
    const newValue = ev.currentTarget.value;
    setHouseFilter(newValue);
  }

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${houseFilter}`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        console.log('Response Data:', responseData);
        setCharacters(responseData);
      });

  }, [houseFilter]);


  const findCharacter = (id) => {
    const characterToShow = characters.find(character => character.id === id);
    return characterToShow;
  }


  const filteredCharacters = characters
    .filter(character => character.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter(character => character.house.toLowerCase() === houseFilter.toLowerCase())
    


  return (
    <div className='page'>
      <header>
        <img src={logo} alt='Harry Potter Logo' className='harry-potter-logo'></img>
      </header>

      <main className='filters'>

        <Routes>
          <Route path='/' element={
            <>
              <form onSubmit={handleFormSubmit} className='form_filters'>
                <CharacterFilterName
                  nameFilter={nameFilter}
                  handleInputName={handleInputName}
                />
                <CharacterFilterHouse
                  houseFilter={houseFilter}
                  handleChangeHouseFilter={handleChangeHouseFilter}
                />
              </form>

              {filteredCharacters.length === 0 ? (
              <p>No hay ningún personaje que coincida con la palabra {nameFilter}.</p>
            ) : (
              <CharactersList
                characters={filteredCharacters}
              />
            )}
            </>
          } />
          <Route path='/detail/:id' element={<CharacterDetail findCharacter={findCharacter} />} />

        </Routes>

      </main>

      {/*<footer>
        despues vemos
      </footer>*/}
    </div>
  )
}

export default App;
