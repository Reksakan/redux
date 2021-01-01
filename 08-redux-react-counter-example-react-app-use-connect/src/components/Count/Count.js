import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Count = ({ value, onIncrement, onDecrement}) => {
  return (
    <div>
      <h1>{value}</h1>
      <button className="increment" onClick={onIncrement}>+</button>
      <button className="decrement" onClick={onDecrement}>-</button>
    </div>
  )
};

Count.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default connect()(Count);
