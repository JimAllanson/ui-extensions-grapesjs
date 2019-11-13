# Dependencies
* Node [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Git [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
* Production account [http://content.amplience.net/](http://content.amplience.net/)

# Running Extension
1. `git clone git@bitbucket.org:amplience/dc-uiex-hello-world.git` to clone this repo
2. `chmod u+x start.sh` to enable execution of start script
3. `npm i`
4. `npm run start`
5. Go to `https://127.0.0.1:1234` and accept cert risk

# Using Extension in DC

1. Go to [http://content.amplience.net/](http://content.amplience.net/) & Login
2. Go to Development > Content Type Schemas > Create schema
3. Give it a unique URI
4. Choose Content Type under 'Schema will be used for' > Save & Open schema
5. Use schema below (replacing $id value with your schema id)
6. Go to Development > Content Types > Register Content Type
7. Choose your schema ang give it a label
8. Under Associated repositories select <x> repo
9. Go to Production > Create content and select your new schema

You are now using a UI Extension. Try updating the placeholder text in `index.html` and see it update in real time. 

## Example schema to use
```
{
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "{{your-schema-id-here}}",

	"title": "Hello World",
	"description": "Description",

	"allOf": [
		{
			"$ref": "http://bigcontent.io/cms/schema/v1/core#/definitions/content"
		}
	],
	
	"type": "object",
	"properties": {
		"helloWorld": {
			"title": "UI Extension",
			"type": "string",
			"ui:extension": {
				"url": "https://localhost:1234/",
				"height": 100
			}
		}
	}
}
```