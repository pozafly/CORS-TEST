import axios from 'axios';
import { ERROR_COLOR, SUCCESS_COLOR } from '../utils/color';

const nocorsCall = document.querySelector('.nocors-call');
const nocorsResult = document.querySelector('.nocors-result');

nocorsCall.addEventListener('click', async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/noCORS');
    nocorsResult.innerHTML = data;
    nocorsCall.style.backgroundColor = SUCCESS_COLOR;
  } catch (error) {
    console.dir(error);
    nocorsResult.innerHTML = error;
    nocorsCall.style.backgroundColor = ERROR_COLOR;
  }
});

const preflightCall = document.querySelector('.preflight-call');
const preflightResult = document.querySelector('.preflight-result');

preflightCall.addEventListener('click', async () => {
  try {
    const { data } = await axios.post('http://localhost:3000/preflight', {
      headers: { 'Content-Type': 'application/json' },
    });
    preflightResult.innerHTML = data;
    preflightCall.style.backgroundColor = SUCCESS_COLOR;
  } catch (error) {
    console.dir(error);
    preflightResult.innerHTML = error;
    preflightCall.style.backgroundColor = ERROR_COLOR;
  }
});