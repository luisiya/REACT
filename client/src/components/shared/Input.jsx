import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

const Input = ({ type, name, placeholder, onChange }) => (
  <input
    className={styles.input}
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
