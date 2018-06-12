import React from 'react';
import PropTypes from 'prop-types';

const CreateSelectOptions = ({ number , title , onChange}) => (


  <div className="selectInput">
    <select  className="valueOfNewHero" name="text" onChange={onChange}>
      <option >{title}</option>
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
  title:PropTypes.string.isRequired,
  onChange: PropTypes.func,


};

CreateSelectOptions.defaultProps = {
  onChange: () => {},

};




