const express = require('express');
const app = express();

app.use(
	express.static(
		__dirname + '/public'
	)
);

app.listen(8090, () => console.log('App listening on port 8090'));
