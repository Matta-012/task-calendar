import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import axios from 'axios';
import { BASE_URL } from '../utils/fetchURLs';

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
          className="block text-gray-700 font-bold"
        >
          Título da tarefa:
        </h3>
        <p
          className="block text-gray-900 font-bold"
        >
          {title}
        </p>
        {description && (
          <>
            <h3 
              className="block text-gray-700 font-bold"
            >
              Descrição da tarefa:
            </h3>
            <p
              className="block text-gray-900 font-bold"
            >
              {description}
            </p>
          </>
        )}
        <h3 
          className="block text-gray-700 font-bold"
        >
          Data e Hora de Início:
        </h3>
        <p
          className="block text-gray-900 font-bold"
        >
          {start.toLocaleString("pt-br")}
        </p>
        {end && (
          <>
            <h3
              className="block text-gray-700 font-bold"
            >
              Data e Hora de Término:
            </h3>
            <p
              className="block text-gray-900 font-bold"
            >
              {end.toLocaleString("pt-br")}
            </p>
          </>
        )}
      </div>
      <div className="flex justify-between py-4">
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={ handleEditTask }
        >
          Editar tarefa
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={ handleDeleteBtn }
        >
          Deletar tarefa
        </button>
      </div>
    </div>
  );
}

export default SelectedTaskCard;
