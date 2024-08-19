
function CharacterFilterName ({ nameFilter, handleInputName}) {
    return (
        <div className='form__character'>
        <label>Busca por Personaje</label>
        <div>
          <input value={nameFilter} onInput={handleInputName} type="text" name="characterSearch" id="characterSearch" />
        </div>
      </div>

    );
}

export default CharacterFilterName;