import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import fetchAPI from "../utils/fetchAPI";
import { BASE_URL } from "../utils/fetchURLs";

export default function AppProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAPI(BASE_URL);
      setTaskList(response.data);
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        taskList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
