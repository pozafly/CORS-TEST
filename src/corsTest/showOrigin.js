import { SUCCESS_COLOR } from '../utils/color';

const showOriginCall = document.querySelector('.show-origin-call');
const showOriginResult = document.querySelector('.show-origin-result');

showOriginCall.addEventListener('click', () => {
  const origin = location.origin;
  showOriginResult.innerHTML = origin;
  showOriginCall.style.backgroundColor = SUCCESS_COLOR;
});