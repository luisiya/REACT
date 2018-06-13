import React from 'react';
import PropTypes from 'prop-types';

const CreateSelectOptions = ({ number , placeholder , onChange, value}) => (


  <div className="selectInput">
    <select  value={value} className="valueOfNewHero" name="text" onChange={onChange} >
      <option >{placeholder} {value}</option>
      {
        Array.from({ length: number }, (v, k) => k).map(arr =>(
        <option key={arr}>{arr}</option>
      ))


      }
    </select>

  </div>
);
export default CreateSelectOptions;

CreateSelectOptions.propTypes = {
  number: PropTypes.number.isRequired,
  placeholder:PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value:PropTypes.string.isRequired,


};

CreateSelectOptions.defaultProps = {
  onChange: () => {},

};




