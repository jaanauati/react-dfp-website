import React from 'react';
import PropTypes from 'prop-types';

const PropLink = ({ name, href }) => (
  <strong>
    <a href={href}>{name}</a>
  </strong>
);

PropLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default PropLink;
