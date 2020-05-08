let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let uuid = required("uuid");

let idN = uuid.v4();

let sport = mongoose.Schema({

	id : { type : String, data : idN},

	name : { type : String},

	num_players : { type : Number }
});

let Sport = mongoose.model('sports',sport);

let sportsList = {

	remove : function ( idRemove ){

		return Sport.remove( idRemove )
			then( sports => {
				return sports
			}) 
			.catch(error=>{
				throw Error(error);
			});
	}


};

module.exports = {

	sportsList
};
