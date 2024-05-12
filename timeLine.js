class TimeLine{
	constructor(id, title, season, episode, timeCodes){
		this.id=id;
		this.title=title;
		this.season=season;
		this.episode=episode;
		this.timeCodes=timeCodes;
		}
}


const timeLine=[

  new TimeLine(1, 'Маска', 0, 0, [10, 120, 10134]),
  new TimeLine(2, 'Фалаут', 1, 2, [1919, 120, 10134])

];

function load(){
	return timeLine;
	}

export default {
	load
	
	}