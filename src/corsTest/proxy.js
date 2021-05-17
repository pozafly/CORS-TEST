import axios from 'axios';
import { ERROR_COLOR, SUCCESS_COLOR } from '../utils/color';

const proxyCall = document.querySelector('.proxy-call');
const proxyResult = document.querySelector('.proxy-result');

proxyCall.addEventListener('click', async () => {
  try {
    const { data } = await axios.get('/api/proxy');
    proxyResult.innerHTML = data;
    proxyCall.style.backgroundColor = SUCCESS_COLOR;
  } catch (error) {
    console.dir(error);
    proxyResult.innerHTML = error;
    proxyCall.style.backgroundColor = ERROR_COLOR;
  }
});
