import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const IconButton = ({text, disabled, onClick, type, about}) => {
  const btnCls = disabled ? styles.disabled : styles.button;

  return (
    <button className={btnCls} type={type} onClick={onClick} title={about}>
      {text}
    </button>
  );
};

IconButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  about: PropTypes.string.isRequired,

};

IconButton.defaultProps = {
  onClick: () => {
  },
  disabled: false,
  type: 'button',
  title: 'click'

};

export default IconButton;
