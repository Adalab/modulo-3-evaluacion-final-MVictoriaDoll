import PropTypes from 'prop-types';


function CharacterFilterName({ nameFilter, handleInputName }) {

    return (
        <div className='form__character'>
            <label className='search_Name_btn' >Busca por Personaje</label>
            <div>
                <input className='input_character_search' value={nameFilter} onInput={handleInputName} type="text" name="characterSearch" id="characterSearch" />
            </div>
            <div className='Error_message'>
                No hay ningun personaje que coincida con {}
            </div>
        </div>

    );
}

CharacterFilterName.propTypes = {
    nameFilter: PropTypes.string.isRequired,
    handleInputName: PropTypes.func.isRequired,
};
export default CharacterFilterName;