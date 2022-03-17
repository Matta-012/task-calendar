import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";
import fetchAPI from "../utils/fetchAPI";
import { BASE_URL } from "../utils/fetchURLs";

export default function AppProvider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAddBtnDisabled, setIsAddBtnDisabled] = useState(true);

  // Fetch data from DB on component mount
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAPI(BASE_URL);

      setTaskList(response.data);
    };

    fetchData();
  }, []);

  // Check if title is valid to enable/disable add new task button
  useEffect(() => {
    const isTitleValid = title && title.length > 3;

    setIsAddBtnDisabled(!isTitleValid);
  }, [title]);

  return (
    <AppContext.Provider
      value={{
        taskList,
        startDate,
        endDate,
        title,
        description,
        isAddBtnDisabled,
        setStartDate,
        setEndDate,
        setTitle,
        setDescription,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
