const moduleUrl='./mainModule.js';
const s = document.createElement('script');
s.setAttribute('src', moduleUrl);
s.setAttribute('type', 'module');
document.body.appendChild(s);

console.log('TiViAl', `Inject Module ${moduleUrl}`);