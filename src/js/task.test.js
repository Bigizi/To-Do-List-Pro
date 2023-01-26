import Todolist from './task.js';
import TaskStatus from './taskstatus.js';

// document.body.innerHTML = '<ul class=\'task-item\'></ul>';
describe('Add task', () => {
  test('array not to be null', () => {
    const task = new Todolist();
    task.addtask('Microverse', false, 0);
    expect(task.length).not.toBeNull();
  });
  test('Add task, description', () => {
    const task = new Todolist();
    task.addtask('Microverse', false, 0);
    task.addtask('Microverse1', false, 1);
    expect(task.taskDtata[1].description).toEqual('Microverse1');
  });
  test('Add task, status', () => {
    const task = new Todolist();
    task.addtask('Microverse', false, 0);
    task.addtask('Microverse1', true, 1);
    expect(task.taskDtata[1].completed).toEqual(true);
  });
  test('Add task, index', () => {
    const task = new Todolist();
    task.addtask('Microverse', false, 0);
    task.addtask('Microverse1', false, 1);
    task.addtask('Microverse3', false, 2);
    expect(task.taskDtata[1].index).toEqual(1);
  });
});

describe('Remove task', () => {
  test('undifined', () => {
    const task = new Todolist();
    task.addtask('Microverse', false, 0);
    task.removetask(0);
    expect(task.length).toBeUndefined();
  });
  test('Remove task, from a multiple added tasks, return length', () => {
    const task = new Todolist();
    task.addtask('Microverse', false, 0);
    task.addtask('Microverse1', false, 1);
    task.addtask('Microverse2', false, 2);
    task.removetask(1);
    expect(task.taskDtata).toHaveLength(2);
  });
});

describe('Editing', () => {
  test('Editing task', () => {
    const task = new Todolist();
    task.addtask('Microverse', false, 0);
    task.addtask('Microverse1', false, 1);
    task.addtask('Microverse2', false, 2);
    task.updatetask(2, 'Microverse2');
    task.taskDtata[2].description = 'Launch Break';
    // task.removetask(1);
    expect(task.taskDtata[2].description).toEqual('Launch Break');
  });
});

describe('Updating task', () => {
  test('Check Status', () => {
    const task = new Todolist();
    const status = new TaskStatus();
    task.addtask('Morining', false, 0);
    task.addtask('Microverse1', false, 1);
    status.checked(task.taskDtata[1]);
    expect(task.taskDtata[1].completed).toEqual(true);
  });

  test('check Status', () => {
    const task = new Todolist();
    const status = new TaskStatus();
    task.addtask('Morining', true, 0);
    task.addtask('Microverse1', false, 1);
    status.unchecked(task.taskDtata[0]);
    expect(task.taskDtata[0].completed).toEqual(false);
  });
});

describe('Clear task', () => {
  test('Clear all completed', () => {
    const task = new Todolist();
    const status = new TaskStatus();
    task.addtask('Morining', true, 0);
    task.addtask('Microverse1', false, 1);
    status.checked(task.taskDtata[1]);
    task.Clearallcompletedtasks();
    expect(task.taskDtata.length).toEqual(0);
  });
});