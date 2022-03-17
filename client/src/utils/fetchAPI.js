import axios from 'axios';

const fetchAPI = async (url) => {
  try {
    const response = await axios.get(url);

    const data = response.data.map(({ id, title, description, startDate, endDate }) => ({
      id,
      title,
      start: startDate,
      end: endDate,
      extendedProps: {
        description
      }
    }));

    return {
      status: response.status,
      data,
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;