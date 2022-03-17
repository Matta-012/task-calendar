import axios from 'axios';
import createTaskObj from './createTaskObj';

const putAPI = async (url, data) => {
  try {
    const response = await axios.put(url, data);

    const result = createTaskObj(response.data);

    return {
      status: response.status,
      result,
    };
  } catch (error) {
    console.log(error);
  }
};

export default putAPI;