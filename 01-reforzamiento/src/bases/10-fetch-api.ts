import type { GiphyRandomResponse, Gif } from './data/giphy.response'

const API_KEY='JUE3r3KjtNFqNyH0TcdyKzEmvjcinlI2'

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

/* myRequest.then( (response) => {
    response.json().then( (data) =>{
        console.log(data)
    });
}).catch( (error) => {
    console.warn(error)
}) */

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

myRequest
    .then( (response) => response.json())
    .then( ({data}: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl)
        
}).catch( (err) => console.error(err));




