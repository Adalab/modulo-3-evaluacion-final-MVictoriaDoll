import PropTypes from 'prop-types';
import CharacterItem from './characterItem';


function CharactersList({ characters }) {



    return (
        <ul className='characters_card'>
            {characters.map((character) => (
                <li key={character.id} className='character_card'>
                    <CharacterItem character={character}/>
                </li>
            ))}
        </ul>
    );
}

CharactersList.propTypes = {
    characters: PropTypes.array.isRequired,
};

export default CharactersList;