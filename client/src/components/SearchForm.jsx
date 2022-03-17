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
    <div className="w-full">
      <form
        className="bg-white shadow-md rounded px-8 py-4 mb-4"
        onSubmit={ handleSearchSubmit }
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="searchbar"
          >
            Pesquisar tarefa
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-4 outline-blue-400"
            id="searchbar"
            type="text"
            placeholder="Pesquisar tarefa por título..."
            value={ searchTerm }
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <div className="pt-4 flex justify-between">
            <div className="">
              <button
                className="bg-blue-500 disabled:bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={ isSearchBtnDisabled }
              >
                Pesquisar
              </button>
            </div>
            <div>
              <button
                className="bg-red-500 disabled:bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={ handleCancelSearch }
              >
                Cancelar pesquisa
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;