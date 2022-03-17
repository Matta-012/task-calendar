import axios from 'axios';
import createTaskObj from './createTaskObj';

const fetchAPI = async (url) => {
  try {
    const response = await axios.get(url);

    const data = response.data.map((data) => createTaskObj(data));

    return {
      status: response.status,
      data,
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;