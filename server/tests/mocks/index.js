const findAllTasksMock = [
  {
      id: 1,
      title: 'Fazer o front',
      description: 'Implementar os requisitos do front-end',
      startDate: '2022-03-15T08:00:00.000Z',
      endDate: '2011-03-16T23:00:00.000Z'
  },
  {
      id: 2,
      title: 'Fazer o back',
      description: 'Implementar os requisitos do back-end',
      startDate: '2022-03-16T07:00:00.000Z',
      endDate: '2011-03-17T23:00:00.000Z'
  },
  {
      id: 3,
      title: 'Fazer os testes',
      description: 'Implementar os testes do back-end',
      startDate: '2022-03-17T06:00:00.000Z',
      endDate: '2011-03-18T14:30:00.000Z'
  }
];

const createTaskMock = (id, body) => ({
  id,
  ...body,
});

const dateErrorMock = { 
  code: '422',
  message: '"endDate" must be greater than start date',
};

const taskListByQueryMock = (query) => findAllTasksMock.filter((task) => task.title.includes(query));

const deleteTaskMock = (id) => findAllTasksMock.filter((task) => task.id !== id)

module.exports = {
  findAllTasksMock,
  createTaskMock,
  dateErrorMock,
  taskListByQueryMock,
  deleteTaskMock,
}