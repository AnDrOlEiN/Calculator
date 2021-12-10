import React from 'react';
import PropTypes from 'prop-types';
import { StyledDisplay } from './components';

const Display = ({ calcValue }) => {
  return (
    <>
      <StyledDisplay value={calcValue} readOnly placeholder={0} />
    </>
  );
};

Display.propTypes = {
  calcValue: PropTypes.string,
}

export default Display;