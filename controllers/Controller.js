
function Controller(){};

Controller.prototype.prep = function(req, res){
	console.log('prep');
};

Controller.prototype.beforeRender = function(req, res){
	
};

Controller.prototype.render = function(view, layout){
	res.render(view, {});
};

module.exports = Controller;
//module.exports = function(){ return new Controller; }