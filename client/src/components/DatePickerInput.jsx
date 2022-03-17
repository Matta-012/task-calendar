import React from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ptBR", ptBR);

function DatePickerInput({ displayDate, handleChange, text }) {
  return (
    <div className="mb-6">
      <p className="block text-gray-700 text-sm font-bold mb-2">{ text }</p>
      <DatePicker
        selected={displayDate || new Date()}
        onChange={(date) => handleChange(date)}
        showTimeSelect
        locale="ptBR"
        timeIntervals={15}
        dateFormat="Pp"
        placeholderText="Selecione uma data..."
        required
      />
    </div>
  );
}

export default DatePickerInput;

DatePickerInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  displayDate: PropTypes.instanceOf(Date).isRequired,
};
