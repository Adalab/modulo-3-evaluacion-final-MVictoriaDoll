function CharactersList({ characters }) {

    const translateSpecie = (species) => {
        if (species === 'human') {
            return 'Humano';
        }
        else if (species === 'half-giant') {
            return 'Mitad-Gigante';
        }
        else {
            return 'otro';
        }
    }

    return (
        <ul className='characters_card'>
            {characters.map((character) => (
                <li key={character.id} className='character_card'>
                    <img className='character_img' src={character.image} alt={character.name} />
                    <h2 className='character_name'>{character.name}</h2>  <p className='character_house'>{translateSpecie(character.species)}</p>

                </li>
            ))}
        </ul>
    );
}

export default CharactersList;