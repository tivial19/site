export default class Log{
constructor(autor, scriptName){
	this.autor=autor;
     this.scriptName = scriptName;
} 

event(name) {
        this.eventParam(name, '');
}

eventParam(eventName, param) {
        console.log(this.autor, this.scriptName, eventName, param);       
}

movie(movie) {
	this.eventParam('data', movie.data);
	this.eventParam('KpId', movie.kpid);
	this.eventParam('ImDbId', movie.imid);
}
}