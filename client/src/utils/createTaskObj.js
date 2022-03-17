const createTaskObj = (payload) => {
  return {
    id: payload.id,
    title: payload.title,
    start: new Date(payload.startDate),
    end: new Date(payload.endDate),
    extendedProps: {
      description: payload.description,
    }
  };
};

export default createTaskObj;