const jokeArea = document.querySelector('div.jokes-section');
const button = document.querySelector('button')


const displayJoke = ((data) => {
  //destructured format
  const {joke} = data;

  //update the browser
  jokeArea.innerHTML = `
    <h3>Joke for Sue:</h3>
    <p class="text-center">${joke}</p
    `;

    //Make the div visible
    if(jokeArea.classList.contains('d-none'))
    {
      jokeArea.classList.remove('d-none')
    }
});

button.addEventListener('click', e => {

  getJoke()
    .then((data) => {displayJoke(data)});

});

