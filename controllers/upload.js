var formidable = require('formidable');
var fs = require('fs');
var mv = require('mv');
var path = require('path');
const unzip = require('unzip');
var form = new formidable.IncomingForm();
const upload =  (req,res) =>{ 

	var working_directory = Math.floor(Date.now() / 1000);
  	try{
  		// upload and save the file
	  	form.parse(req, function (err, fields, files) {
			if(err) throw err;
		  	var oldpath = files.filetoupload.path;
			var extention_name = path.extname(files.filetoupload.name);
		  	var newpath = process.cwd() + '/uploads/' + working_directory + '/' + 'build' + extention_name;

		  	// create folder if doesnt exists
		  	if (!fs.existsSync(process.cwd() + '/uploads/'+ working_directory + '/')){
			    fs.mkdirSync(process.cwd() + '/uploads/'+ working_directory + '/');
			}

			// actually move the file from temp
		    mv(oldpath, newpath, function (err) {
				if(err) throw err;
			    var fileToExtractTo = process.cwd() + '/uploads/' + working_directory + '/build.zip';
				var directoryToExtractTo = process.cwd() + '/uploads/' + working_directory + '/unzip/';

				var extracted = fs.createReadStream(fileToExtractTo).pipe(unzip.Extract({path:directoryToExtractTo}));
				//res.write(''+extracted+'');

				



				res.end();
			});
		});
  	}
  	catch(e){
  		console.log(e);
  	}
}

module.exports = upload