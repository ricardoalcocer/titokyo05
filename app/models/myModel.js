exports.definition = {
	config: {
		"columns": {
			"title":"text",
			"image":"text",
			"content":"text",
			"timestamp":"text"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "myModel"
		}
	}
}