import '../styles/App.scss';
import logo from '../images/Logo_HarryPotter_png.png';
import { useState, useEffect } from "react";
import CharactersList from './characters/charactersList';
import CharacterFilterName from './characters/characterFilterName';
import CharacterFilterHouse from './characters/characterFilterHouse.jsx';
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './characters/CharacterDetail.jsx';
import CharacterFilterGender from './characters/charactersFilterGender.jsx';



function App() {

  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [houseFilter, setHouseFilter] = useState('gryffindor');
  const [genderFilter, setGenderFilter] = useState('all');


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

  const handleChangeGenderFilter = (ev) => {
    const newValueGender = ev.currentTarget.value;
    setGenderFilter(newValueGender);
    console.log('genero', genderFilter)
  }


  let filteredCharacters = characters
    .filter(character => character.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter(character => character.house.toLowerCase() === houseFilter.toLowerCase())
  if (genderFilter !== 'all') {
    filteredCharacters = filteredCharacters.filter(character => character.gender.toLowerCase() === genderFilter.toLowerCase());
  }

  useEffect(() => {
    let url = `https://hp-api.onrender.com/api/characters/house/${houseFilter}`;
    if (genderFilter !== 'all') {
      url += `?gender=${genderFilter}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        console.log('Response Data:', responseData);
        setCharacters(responseData);
      });

  }, [houseFilter, genderFilter]);


  const findCharacter = (id) => {
    const characterToShow = characters.find(character => character.id === id);
    return characterToShow;
  }


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
                <CharacterFilterGender
                  genderFilter={genderFilter}
                  handleChangeGenderFilter={handleChangeGenderFilter}

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

    </div>
  )
}

export default App;
