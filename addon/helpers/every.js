import Ember from 'ember';

var depthCount = 0;

function builder(key, value, arr) {
	if(typeof value === 'object') {
		var keys = Object.keys(value);
		var keys.forEach(function(key) {
			builder(key, value.key);
		});
	} else {
		var obj = {
			name: key,
			value: value
		}
		arr.push(obj);
	}
}

export default Ember.Handlebars.makeBoundHelper(function(model) {
	var arr = [];
	var keys = Object.keys(model);
	keys.forEach(function(key) {
		builder(key, model.key, arr);
	});
});
