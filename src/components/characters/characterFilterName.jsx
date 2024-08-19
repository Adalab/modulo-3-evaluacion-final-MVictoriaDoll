import PropTypes from 'prop-types';

function CharacterFilterName({ nameFilter, handleInputName }) {
    return (
        <div className='form__character'>
            <label>Busca por Personaje</label>
            <div>
                <input value={nameFilter} onInput={handleInputName} type="text" name="characterSearch" id="characterSearch" />
            </div>
        </div>

    );
}

CharacterFilterName.propTypes = {
    nameFilter: PropTypes.string.isRequired,
    handleInputName: PropTypes.func.isRequired,
};
export default CharacterFilterName;