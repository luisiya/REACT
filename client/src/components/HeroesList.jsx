import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import styles from './HeroesList.css';

const HeroesList = ({ value, users, ...props }) => (
  <ul className={styles.list}>
    {users.map(user => (
      <li key={user.id} className={styles.item}>
        <Hero edit={value} {...user} {...props} />
      </li>
    ))}
  </ul>
);

HeroesList.propTypes = {
  value:PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
HeroesList.defaultProps = {
  value:false
}

export default HeroesList;