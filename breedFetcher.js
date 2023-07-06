const request = require('request');
const breedName = process.argv[2];
const breedEndpoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(breedEndpoint, (error, response, body) => {
  if (error) {
    console.error('Request failed:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      const firstEntry = data[0];
      console.log('Description:', firstEntry.description);
    } else {
      console.log('No results found for the breed.');
    }
  }
});