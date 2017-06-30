# FreeCodeCamp API Projects: URL Shortener Micro-service

This is an API created as part of [FCC's Back End Development Certification](https://www.freecodecamp.com/challenges/url-shortener-microservice) that receives a URL as a parameter and generates a shortened URL in the JSON response.

## User stories:
1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

## Example creation usage:

<https://little-url.herokuapp.com/new/https://www.google.com>

## Example creation output:

```js
{"original_url":"https://www.google.com","short_url":"https://little-url.herokuapp.com/2871"}
```

## Usage:

<https://little-url.herokuapp.com/2871>

## Will redirect to:

<https://www.google.com/>

## Resources:

[Expressjs redirect](https://expressjs.com/en/4x/api.html#res.redirect)
[MongoDB findOne](https://docs.mongodb.com/manual/reference/method/db.collection.findOne/)
[Integrating MongoDB on Heroku](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Using-MongoDB-And-Deploying-To-Heroku)
