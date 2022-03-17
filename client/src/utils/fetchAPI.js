import axios from 'axios';

const fetchAPI = async (url) => {
  try {
    const data = axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;