const createTaskObj = (event) => {
  return {
    id: event.id,
    title: event.title,
    start: new Date(event.startDate),
    end: new Date(event.endDate),
    extendedProps: {
      description: event.description,
    }
  };
};

export default createTaskObj;