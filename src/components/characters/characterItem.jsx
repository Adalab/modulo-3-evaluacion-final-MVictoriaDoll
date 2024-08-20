import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { translateData } from '../../Utils/Translations';


function CharacterItem({ character }) {
   

    const imageUrl = character.image ? character.image : 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter';

    return (
        <Link to={`/detail/${character.id}`} className='details'>
            <img className='character_img' src={imageUrl} alt={character.name} />
            <h2 className='character_name'>{character.name}</h2> <p className='character_species'>{translateData(character.species)}</p>
        </Link>
    );
}

CharacterItem.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterItem;