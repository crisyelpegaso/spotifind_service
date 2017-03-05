var http = require('http'),
	https   = require('https'),
    express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000); 
app.use(express.bodyParser());

app.get('/', function (req, res) {
	console.log('Invalid request received.');
	res.json({'error': 'invalid request. Where are you trying to go? :thinking_face:'});
});

app.get('/healthcheck', function (req, res) {
	res.json({'message': 'Now i cant see,...i just stare...ooohhh, im still alive!'});
});

app.post('/save_track', function (req, res) {
	var lat = req.param('lat', null);
	var long = req.param('long', null);
	var trackId = req.param('track_id', null);

	saveSongData(lat, long, trackId);
	return;
});

app.post('/find_track', function (req, res) {
	console.log('Request received : ' + req.body);

	var lat = req.param('lat', null);
	var long = req.param('long', null);
	console.log(long);
	console.log(lat);
	if (lat && long) {
		res.json({'track_id': '3eA6wcKrlXm5FlmmxLZ2xL', 'name': 'The Way My Heart Beats'});
	} else {
		res.json({'error': 'Missing parameters : lat & long needed !'});
	}
	return;
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


function saveSongData(lat, long, songId) {
	// TODO : Do your thing girl
}
