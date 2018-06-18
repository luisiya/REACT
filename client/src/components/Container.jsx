import React from 'react';
import PropTypes from 'prop-types';

const Container =({width = 1170, children}) => (
  <div style={{maxWidth: width, margin:'0 auto'}}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,

  width: PropTypes.number.isRequired
};
export default Container;
