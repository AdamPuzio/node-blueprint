

exports.index = function(req, res){
	var cfg = {
		title: ''
	};
	res.render('index', cfg);
};