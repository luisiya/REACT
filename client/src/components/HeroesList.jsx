import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import styles from './HeroesList.css';

const HeroesList = ({ value, users, ...props }) => (
  <ul className={styles.list}>
    {users.map(user => (
      <li key={user.id} className={styles.item}>
        <Hero value={value} {...user} {...props} />
      </li>
    ))}
  </ul>
);

HeroesList.propTypes = {
  value:PropTypes.string,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

HeroesList.defaultProps ={
  value:""
}

export default HeroesList;
