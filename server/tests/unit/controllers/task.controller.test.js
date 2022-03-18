const { expect } = require("chai");
const sinon = require('sinon');

const {
  findAllTasksMock,
  createTaskMock,
  dateErrorMock,
  taskListByQueryMock,
  deleteTaskMock,
} = require('../../mocks');

const { Task } = require('../../../models');
const validateTaskData = require('../../../middlewares/validateTaskData.middleware');
const taskController = require('../../../controllers/task.controller');

describe('task.controller unit tests', () => {
  describe('get all tasks response when DB is empty', () => {
    const req = {};
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(Task, 'findAll').resolves([]);
    })

    afterEach(() =>{
      Task.findAll.restore();
    })

    it('response status should be 200', async () => {
      await taskController.getAll(req, res, next);

      expect(res.status.calledWith(200)).to.be.true;
    })

    it('response json should be an empty array', async () => {
      await taskController.getAll(req, res, next);

      expect(res.json.calledWith([])).to.be.true;
    })
  })

  describe('get all response when one or more tasks exists on DB', () => {
    const req = {};
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(Task, 'findAll').resolves(findAllTasksMock)
    })

    afterEach(() =>{
      Task.findAll.restore();
    })

    it('response status should be 200', async () => {
      await taskController.getAll(req, res, next);

      expect(res.status.calledWith(200)).to.be.true;
    })

    it('response json should be an array', async () => {
      await taskController.getAll(req, res, next);

      expect(res.json.calledWith(findAllTasksMock)).to.be.true;
    })
  })

  describe('getByQuery response when data is found in DB', () => {
    const req = {
      query: {
        q: 'front',
      }
    };
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(Task, 'findAll').resolves(taskListByQueryMock(req.query.q));
    })

    afterEach(() =>{
      Task.findAll.restore();
    })

    it('response status should be 200', async () => {
      await taskController.getAll(req, res, next)

      expect(res.status.calledWith(200)).to.be.true;
    })

    it('response json should be an array that matches the search params', async () => {
      await taskController.getByQuery(req, res, next)

      const result = taskListByQueryMock(req.query.q);

      expect(res.json.calledWith(result)).to.be.true;
    })
  })

  describe('create response when the correct data is passed in the request body', () => {
    const req = {
      body: {
        title: 'testing create feature',
        description: '',
        startDate: '2022-03-17T14:00:00.000Z',
        endDate: '2022-03-17T18:00:00.000Z',
      }
    };
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(Task, 'create').resolves({ id: 4 });
    })

    afterEach(() =>{
      Task.create.restore();
    })

    it('response status should be 201', async () => {
      await taskController.create(req, res, next)

      expect(res.status.calledWith(201)).to.be.true;
    })

    it('response json should be an object with new task', async () => {
      await taskController.create(req, res, next)
      const { id } = await Task.create(req.body);
      const result = createTaskMock(id, req.body);

      expect(res.json.calledWith(result)).to.be.true;
    })
  })

  //middleware de erro de data
  describe('create response when endDate is before startDate', () => {
    const req = {
      body: {
        title: 'testing create feature',
        description: '',
        startDate: '2022-03-17T14:00:00.000Z',
        endDate: '2021-03-17T18:00:00.000Z',
      }
    };
    const res = {};
    let next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      next = sinon.stub().returns();
    })

    it('response status should be 422', () => {
      validateTaskData(req, res, next)

      expect(res.status.calledWith(dateErrorMock.code)).to.be.true;
    })

    it('json response message should be: "endDate" must be greater than start date', () => {
      validateTaskData(req, res, next)

      expect(res.json.calledWith({ message: dateErrorMock.message})).to.be.true;
    })
  })

  describe('update response when correct data is passed in the request body', () => {
    const req = {
      params: { id: 1 },
      body: {
        title: 'testing update feature',
        description: 'testing update changes',
        endDate: '2023-03-16T23:00:00.000Z',
      },
      taskData: {
        dataValues: {
          id: 1,
          title: 'Fazer o front',
          description: 'Implementar os requisitos do front-end',
          startDate: '2022-03-15T08:00:00.000Z',
          endDate: '2011-03-16T23:00:00.000Z',
        },
      },
    };
    const res = {};
    const next = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(Task, 'update').resolves({});
    })

    afterEach(() =>{
      Task.update.restore();
    })

    it('response status should be 200', async () => {
      await taskController.update(req, res, next)

      expect(res.status.calledWith(200)).to.be.true;
    })

    it('response json should be an object with the updated task', async () => {
      await taskController.update(req, res, next)
      const result = {
        ...req.taskData.dataValues,
        ...req.body,
      };

      expect(res.json.calledWith(result)).to.be.true;
    })
  })

  describe('delete response when an existing ID is passad as a param', () => {
    const req = {
      params: {
        id: 1,
      }
    };
    const res = {};
    const next = () => {};
    const end = () => {};

    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      res.end = sinon.stub().returns();

      sinon.stub(Task, 'destroy').resolves({});
      sinon.stub(Task, 'findAll').resolves(deleteTaskMock(req.params.id))
    })

    afterEach(() =>{
      Task.destroy.restore();
      Task.findAll.restore();
    })

    it('response status should be 204', async () => {
      await taskController.deleteTask(req, res, next)

      expect(res.status.calledWith(204)).to.be.true;
    })

    
    it('task with id parameter should be deleted', async () => {
      await taskController.deleteTask(req, res, next)
      await taskController.getAll(req, res, next);
      const allTasks = deleteTaskMock(req.params.id)

      expect(res.json.calledWith(allTasks)).to.be.true;
    })
  })
})