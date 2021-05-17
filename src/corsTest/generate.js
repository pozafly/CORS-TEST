import axios from 'axios';
import { ERROR_COLOR } from '../utils/color';

const naverCall = document.querySelector('.naver-call');
const naverResult = document.querySelector('.naver-result');

naverCall.addEventListener('click', async () => {
  try {
    const { data } = await axios.get('https://www.naver.com');
    console.log(data);
  } catch (error) {
    console.dir(error);

    naverResult.innerHTML = error;
    naverCall.style.backgroundColor = ERROR_COLOR;
  }
});

const expressCall = document.querySelector('.express-call');
const expressResult = document.querySelector('.express-result');

expressCall.addEventListener('click', async () => {
  try {
    const { data } = await axios.get('http://localhost:3000');
    console.log(data);
  } catch (error) {
    console.dir(error);

    expressResult.innerHTML = error;
    expressCall.style.backgroundColor = ERROR_COLOR;
  }
});