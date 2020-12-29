import React from 'react';
import PropTypes from 'prop-types';

const Count = ({ value, onIncrement, onDecrement}) => {
  return (
    <div>
      <h1>{value}</h1>
      <button type="click" className="increment" onClick={onIncrement}>+</button>
      <button type="click" className="decrement" onClick={onDecrement}>-</button>
    </div>
  )
};

Count.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}


export default Count;