import axios from 'axios';
import init from './highlight';
init();

const content = document.querySelector('.content');
const result = document.querySelector('.result');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  axios.get('http://localhost:3000/api/name').then((data) => {
    console.log(data);
    result.innerHTML = data.data.map(item => item.name);
  }).catch(error => {
    console.log(error);
    result.innerHTML = error;
  });
});