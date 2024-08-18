import PropTypes from 'prop-types';


function CharacterItem({ character }) {
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
        <div className='details'>
            <img className='character_img' src={character.image} alt={character.name} />
            <h2 className='character_name'>{character.name}</h2>  <p className='character_house'>{translateSpecie(character.species)}</p>
        </div>
    );
}

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired
  };

export default CharacterItem;