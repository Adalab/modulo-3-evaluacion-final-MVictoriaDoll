import PropTypes from 'prop-types';

function CharacterFilterHouse({ houseFilter, handleChangeHouseFilter }) {
  return (
    <div className='form_house'>
      <label className='search_House_btn' >Selecciona la casa</label>
      <div>
        <select className='select_character_house' onChange={handleChangeHouseFilter} value={houseFilter} name="houseSelect" id="houseSelect">
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
      </div>
    </div>
  );
}

CharacterFilterHouse.propTypes = {
  houseFilter: PropTypes.string.isRequired,
  handleChangeHouseFilter: PropTypes.func.isRequired,
};
export default CharacterFilterHouse;