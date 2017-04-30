const ELASTICSEARCH = require('elasticsearch');
const CLIENT = new ELASTICSEARCH.Client({
	host: 'localhost:9200',
	apiVersion: '5.0'
});

CLIENT.get({
	index: 'simpsons',
	type: 'episode',
	id: 1
}).then((resp) => {
	console.log(resp);
}).catch((err) => {
	console.log(err);
})