import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import axios from 'axios';
import { BASE_URL } from '../utils/fetchURLs';
import FormButton from './FormButton';

function SelectedTaskCard() {
  const {
    selectedTask,
    setSelectedTask,
    taskList,
    setTaskList,
    isEditingTask,
    setIsEditingTask,
    setStartDate,
    setEndDate,
    setTitle,
    setDescription,
  } = useContext(AppContext);

  const {
    id,
    title,
    start,
    end,
    extendedProps: { description },
  } = selectedTask;

  // Delete task from DB and update taskList
  const handleDeleteBtn = async () => {
    const response = await axios.delete(`${BASE_URL}/${id}`);

    if (response.status === 204) {
      const updatedTaskList = taskList.filter((task) => task.id !== id);
      setTaskList(updatedTaskList);
      setSelectedTask({});
    }
  };

  const updateFormWithSelectedEvent = () => {
    setTitle(title);
    setDescription(description || '');
    setStartDate(start);
    setEndDate(end);
  };

  const handleEditTask = () => {
    setIsEditingTask(!isEditingTask);

    updateFormWithSelectedEvent();
  };

  return (
    <div className="bg-white shadow-md rounded px-8 py-2">
      <div>
        <h3 
          className="block text-lg text-gray-900 font-bold"
        >
          Título da tarefa:
        </h3>
        <p
          className="block text-gray-700 font-bold"
        >
          {title}
        </p>
        {description && (
          <>
            <h3 
              className="block text-lg text-gray-900 font-bold"
            >
              Descrição da tarefa:
            </h3>
            <p
              className="inline-block text-gray-700 font-bold"
            >
              {description}
            </p>
          </>
        )}
        <h3 
          className="block text-lg text-gray-900 font-bold"
        >
          Data e Hora de Início:
        </h3>
        <p
          className="block text-gray-700 font-bold"
        >
          {start.toLocaleString("pt-br")}
        </p>
        {end && (
          <>
            <h3
              className="block text-lg text-gray-900 font-bold"
            >
              Data e Hora de Término:
            </h3>
            <p
              className="block text-gray-700 font-bold"
            >
              {end.toLocaleString("pt-br")}
            </p>
          </>
        )}
      </div>
      <div className="flex justify-between py-4">
        <FormButton
          classes="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          btnText="Editar tarefa"
          btnType="button"
          handleClick={ handleEditTask }
        />
        <FormButton
          classes="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          btnText="Deletar tarefa"
          btnType="button"
          handleClick={ handleDeleteBtn }
        />
      </div>
    </div>
  );
}

export default SelectedTaskCard;
