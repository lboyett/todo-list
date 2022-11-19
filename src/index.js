import _ from 'lodash';
import './style.css';
import indexPage from './default.js'

// const todayProject = document.getElementById('today-button');
// todayProject.style.backgroundColor = 'rgb(204, 204, 204)';

// const indexProject = document.getElementById('index-button');
// indexProject.addEventListener('click', () => defaultPage());

let indexProjectTasks = indexPage();
const logo = document.querySelector('.page-title');
logo.addEventListener('click',() => console.log('ARRAY: '+ indexProjectTasks));
