const autor='TiViAl';
const moduleName='Main Module';
console.log(autor, moduleName, 'Import');

import Log from './log.js';
import TimeLine from './timeLine.js';


console.log(autor, moduleName, 'Load');

const timeLine= TimeLine.load();
console.log(autor, moduleName, timeLine);


console.log(autor, moduleName, 'Loaded');