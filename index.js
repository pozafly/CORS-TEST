import axios from 'axios';

const div = document.querySelector('.container');
div.innerHTML = 'Webpack loaded!!';

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  // console.log('누ㅡㄹ리')
  // fetch('http://localhost:3000/a', {
  //   method: 'GET',
  //   // headers: {
  //   //   'Content-Type': 'application/json',
  //   // },
  // }).then(data => {
  //   console.log(data);
  // }).catch(error => {
  //   console.log(error)
  //   div.innerHTML = error
  // })
  axios.get('http://localhost:3000/api/name').then((data) => {
    console.log(data);
    div.innerHTML = data.data.map(item => item.name);
  }).catch(error => {
    console.log(error);
    console.log(error.response)
    div.innerHTML = error
  });

  
});