import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import axios from 'axios';
import { BASE_URL } from '../utils/fetchURLs';

function SelectedTaskCard() {
  const { selectedTask, setSelectedTask, taskList, setTaskList } = useContext(AppContext);
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

  return (
    <div>
      <div>
        <h3>Título do evento</h3>
        <p>{title}</p>
        {description && (
          <>
            <h3>Descrição do evento</h3>
            <p>{description}</p>
          </>
        )}
        <h3>Data e Hora de Início</h3>
        <p>{start.toLocaleString("pt-br")}</p>
        {end && (
          <>
            <h3>Data e Hora de Término</h3>
            <p>{end.toLocaleString("pt-br")}</p>
          </>
        )}
      </div>
      <button
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        // onClick={  }
      >
        Editar Evento
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={ handleDeleteBtn }
      >
        Deletar Evento
      </button>
    </div>
  );
}

export default SelectedTaskCard;
