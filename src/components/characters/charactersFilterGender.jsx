import PropTypes from 'prop-types';


function CharacterFilterGender ({handleChangeGenderFilter, genderFilter}) {
    return (
        <div className='form_gender'>
        <label className='search_Gender_btn' >Selecciona el genero</label>
        <div>
          <select className='select_character_gender' onChange={handleChangeGenderFilter} value={genderFilter} name="genderSelect" id="genderSelect">
            <option value="all">Todos</option>
            <option value="female">Femenino</option>
            <option value="male">Masculino</option>
          </select>
        </div>
      </div>
    )
}

CharacterFilterGender.propTypes = {
  genderFilter: PropTypes.string.isRequired,
  handleChangeGenderFilter: PropTypes.func.isRequired,
};
export default CharacterFilterGender;