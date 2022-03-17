import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import fetchAPI from '../utils/fetchAPI';
import { BASE_URL } from '../utils/fetchURLs';

function SearchForm() {
  const { isSearchBtnDisabled, searchTerm, setSearchTerm, setTaskList } = useContext(AppContext);

  const handleCancelSearch = async () => {
    const response = await fetchAPI(BASE_URL);

    if (response.status === 200) {
      setTaskList(response.data);

      setSearchTerm('');
    }
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    const response = await fetchAPI(`${BASE_URL}/search?q=${searchTerm}`);

    if (response.status === 200 && response.data.length > 0) {
      setTaskList(response.data);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={ handleSearchSubmit }
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="searchbar"
          >
            Pesquisar tarefa
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="searchbar"
            type="text"
            placeholder="Pesquisar tarefa por título..."
            value={ searchTerm }
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            className="bg-blue-500 disabled:bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={ isSearchBtnDisabled }
          >
            Pesquisar
          </button>
          <button
            className="bg-red-500 disabled:bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            disabled={ isSearchBtnDisabled }
            onClick={ handleCancelSearch }
          >
            Cancelar pesquisa
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;