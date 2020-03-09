// let f = [2, 6];
// let movie = (...arg) => {
//   return arg;
// };
// console.log(movie(15, 36));
// let m = [...f, ...movie(15, 36)];
// console.log(m);

const promise = new Promise((resolve,reject) => {
  if(true){
    resolve('hello world!');
  } else {
    reject();
  }
});
promise.then(data => console.log('success:', data))
        .catch(error => console.log('error:', error));

let m = document.getElementById('help');
m.classList.add('helpppp');
