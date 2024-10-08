import PropTypes from 'prop-types';
import { translateData } from '../../Utils/Translations';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



function CharacterDetail({ findCharacter }) {

    const params = useParams();
    const characterToShow = findCharacter(params.id);

    const status = characterToShow.alive ? (
        <>
            Vivo <i className="fa-duotone fa-solid fa-heart-pulse"></i>
        </>
    )
        : (
            <>
                Muerto <i className="fa-sharp-duotone fa-solid fa-heart-crack"></i>
            </>
        );

    const imageUrlDetail = characterToShow.image ? characterToShow.image : 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter';



    return (
        <div className='detail-container'>
            <div>
                <Link className='back-link' to='/'>Volver</Link>

            </div>
            <div className="character-detail">
                <img src={imageUrlDetail} alt={characterToShow.name} />
            </div>
            <div className='character-info'>
                <p className='character-info'>Nombre: {characterToShow.name}</p>
                <p className='character-info'>Status: {status}</p>
                <p className='character-info'>Especie: {translateData(characterToShow.species)}</p>
                <p className='character-info'>Género: {translateData(characterToShow.gender)}</p>
                <p className='character-info'>Casa: {characterToShow.house}</p>
            </div>

        </div>

    );
}

CharacterDetail.propTypes = {
    findCharacter: PropTypes.func.isRequired,
};
export default CharacterDetail;