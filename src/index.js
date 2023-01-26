/* eslint no-alert: "error" */

import './style.css';
import Todolist from './js/task.js';

let index = 0;
const completed = false;
const taskentry = new Todolist();
const addnewtask = document.querySelector('.addbtn');
const inputelement = document.querySelector('.input-element');
addnewtask.addEventListener('click', () => {
  if (inputelement.value === '') {
    addnewtask.setCustomValidity('This is required field!');
  } else {
    taskentry.addtask(inputelement.value, completed, index);
    taskentry.display();
    inputelement.value = '';
    index += 1;
  }
});

window.onload = () => {
  taskentry.taskDtata = JSON.parse(localStorage.getItem('TODOLISTDB' || '[]'));
  if (taskentry.taskDtata === null) {
    taskentry.taskDtata = [];
    return;
  }
  taskentry.display();
};

const clearalltask = document.querySelector('.clear-all-tasks');
clearalltask.addEventListener('click', (e) => {
  e.preventDefault();
  taskentry.Clearallcompletedtasks();
  clearalltask.style.textDecoration = 'underline';
});

const counttask = document.querySelector('.count-task');
const data = localStorage.getItem('TODOLISTDB');
const x = JSON.parse(data);
counttask.textContent = x.length;
const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});