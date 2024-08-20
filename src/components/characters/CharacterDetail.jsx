import PropTypes from 'prop-types';
import { translateData } from '../../Utils/Translations';
import { useParams } from "react-router-dom";


function CharacterDetail({findCharacter}) {

    const params = useParams();
    const characterToShow = findCharacter (params.id);
    
    const status = characterToShow.alive ? "vivo" : 'Muerto';

    return (
        <div>
            <button>Volver</button>
            <div className="col2">
                <img src={characterToShow.image} alt={characterToShow.name}/>
            </div>
            <p>Nombre: {characterToShow.name}</p>
            <p>Status {status}</p>
            <p>Especie: {translateData (characterToShow.species)}</p> 
            <p>Genero: {translateData (characterToShow.gender)}</p>
            <p>Casa: {characterToShow.house}</p>
            <p>ID: {params.id}</p>

        </div>

    );
}

CharacterDetail.propTypes = {
    findCharacter: PropTypes.func.isRequired,
};
export default CharacterDetail;