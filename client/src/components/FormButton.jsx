import React from 'react';
import PropTypes from 'prop-types';

function FormButton({ classes, isBtnDisabled, btnText, btnType, handleClick }) {
  return (
    <>
    <button
      className={ classes }
      type={ btnType }
      disabled={ isBtnDisabled }
      onClick={ handleClick }
    >
      { btnText }
    </button>
    </>
  );
}

export default FormButton;

FormButton.propTypes = {
  classes: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  isBtnDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
};