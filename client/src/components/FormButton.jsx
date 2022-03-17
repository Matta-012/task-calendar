import React from 'react';
import PropTypes from 'prop-types';

function FormButton({ classes, isBtnDisabled, btnText }) {
  return (
    <>
    <button
      className={ classes }
      type="submit"
      disabled={ isBtnDisabled }
    >
      { btnText }
    </button>
    </>
  );
}

export default FormButton;

FormButton.propTypes = {
  classes: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  isBtnDisabled: PropTypes.bool.isRequired,
};