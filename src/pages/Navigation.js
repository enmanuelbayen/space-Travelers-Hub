import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';

const Navigation = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
