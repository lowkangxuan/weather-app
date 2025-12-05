import "./styles.css";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const query = document.getElementById('query');
const img = document.querySelector('img');
function newImage(query) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=cbwC03oDPFPt8k28luJ3qF2H7n4UZnnk&s=${query}`)
        .then(function(response) {
            if (!response.ok) {
                throw new Error(`Response Status: ${response.status}`);
            }

            return response.json();
        })
        .then(function(response) {
            console.log(response);
            img.src = response.data.images.original.url;
        })
    .catch (err => {
        console.log(`Failed to load image: ${err}`);
    });
}

document.getElementById("new-img").addEventListener("click", () => {
    newImage(query.value);
});

newImage(query.value);