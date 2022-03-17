import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import FormButton from './FormButton';
import DatePickerInput from './DatePickerInput';
import postAPI from '../utils/postAPI';
import putAPI from '../utils/putAPI';
import fetchAPI from '../utils/fetchAPI';
import { BASE_URL } from '../utils/fetchURLs';

function TaskForm() {
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
    setTaskList,
    taskList,
    isEditingTask,
    setIsEditingTask,
    selectedTask,
    setSelectedTask,
    setSearchTerm,
  } = useContext(AppContext);

  const resetFormInputs = () => {
    setTitle('');
    setDescription('');
    setSearchTerm('');
  };

  const createNewTask = async (e) => {
    const newTask = {
      title,
      description,
      startDate,
      endDate,
    };

    const response = await postAPI(BASE_URL, newTask);
    
    if (response.status === 201) {
      const newTaskList = [...taskList, response.result];
      setTaskList(newTaskList);
      resetFormInputs();
    }
  };

  const updateTaskList = async () => {
    const updatedList = await fetchAPI(BASE_URL);

    if (updatedList.status === 200) {
      setTaskList(updatedList.data);
    }
  };

  const updateSelectedTask = async () => {
    const { id } = selectedTask;
    const updatedTask = {
      title,
      description,
      startDate,
      endDate,
    };

    const response = await putAPI(`${BASE_URL}/${id}`, updatedTask);

    if (response.status === 200) {
      await updateTaskList();
      resetFormInputs();
      setSelectedTask({});
    }
    setIsEditingTask(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditingTask) {
      await updateSelectedTask();
    } else {
      await createNewTask();
    }
  };

  return (
    <div className="w-96">
      <form
        className="bg-white shadow-md rounded px-8 py-2 mb-4"
        onSubmit={ handleSubmit }
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="title"
          >
            Título:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-4 outline-blue-400"
            id="title"
            type="text"
            placeholder="Título da tarefa..."
            value={ title }
            onChange={ (e) => setTitle(e.target.value) }
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Descrição:
          </label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-4 outline-blue-400"
            id="description"
            placeholder="Descrição da tarefa"
            rows="5"
            value={ description }
            onChange={ (e) => setDescription(e.target.value) }
          />
        </div>
        <div className="flex">
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
        </div>
        <div className="mb-2">
          {!isEditingTask ? (
            <FormButton
              classes="bg-blue-500 disabled:bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              isBtnDisabled={isAddBtnDisabled}
              btnText="Adicionar tarefa"
            />
          ) : (
            <FormButton
              classes="bg-green-500 disabled:bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              isBtnDisabled={isAddBtnDisabled}
              btnText="Editar tarefa selecionada"
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
