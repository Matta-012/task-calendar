import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import FormButton from "./FormButton";
import DatePickerInput from "./DatePickerInput";

function EventForm() {
  const {
    startDate,
    endDate,
    title,
    description,
    isAddBtnDisabled,
    setStartDate,
    setEndDate,
    setTitle,
    setDescription,
  } = useContext(AppContext);

  // const createEvent = () => {
  //   const newEvent = {
  //     id: eventList.length + 1,
  //     title,
  //     start: startDate,
  //     end: endDate,
  //     extendedProps: {
  //       description: description || "",
  //     },
  //   };

  //   const newEventList = [...eventList, newEvent];

  //   setEventList(newEventList);
  //   setIsEditingEvent(false);
  //   setSelectedEvent({});
  //   setTitle('');
  //   setDescription('');
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (isEditingEvent) {
  //     updateEvent();
  //   } else {
  //     createEvent();
  //   }
  // };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        // onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Título
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Título da tarefa..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descrição
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Descrição do evento"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <DatePickerInput
          text="Início"
          handleChange={ setStartDate }
          displayDate={ startDate }
        />
        <DatePickerInput
          text="Término"
          handleChange={ setEndDate }
          displayDate={ endDate }
        />
        <div className="">
          <FormButton
            classes="bg-blue-500 disabled:bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            isBtnDisabled={isAddBtnDisabled}
            btnText="Adicionar evento"
          />
          {/* {!isEditingEvent ? (
            <FormButton
              classes="bg-blue-500 disabled:bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              isBtnDisabled={isAddBtnDisabled}
              btnText="Adicionar evento"
            />
          ) : (
            <FormButton
              classes="bg-green-500 disabled:bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              isBtnDisabled={isAddBtnDisabled}
              btnText="Editar evento selecionado"
            />
          )} */}
        </div>
      </form>
    </div>
  );
}

export default EventForm;