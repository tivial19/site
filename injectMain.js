//const moduleUrl='./main.js';
//const moduleUrl='http://31415.000.pe/main.js';
const moduleUrl='https://tivial19.github.io/site/main.js';

const s = document.createElement('script');
s.setAttribute('src', moduleUrl);
s.setAttribute('type', 'module');
document.body.appendChild(s);

console.log('TiViAl', `Inject Module ${moduleUrl}`);