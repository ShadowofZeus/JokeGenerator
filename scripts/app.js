const jokeArea = document.querySelector('div.jokes-section');
const button = document.querySelector('button')


const displayJoke = ((data) => {
  //destructured format
  const {joke} = data;

  //update the browser
  jokeArea.innerHTML = `
    <div class="card text-center">
      <div class="card-header bg-light">
         Joke Generator
      </div>
      <div class="card-body bg-info text-white">
        <h5 class="card-title">Joke of the moment</h5>
        <p class="card-text">${joke}</p>
      </div>
      <div class="card-footer text-muted bg-light">
        And Sue Laughed.....lol
      </div>
    </div>
    `;

    //Make the div visible
    if(jokeArea.classList.contains('d-none'))
    {
      jokeArea.classList.remove('d-none')
    }
});

button.addEventListener('click', e => {

  getJoke()
    .then((data) => {
      displayJoke(data)
      //Scroll to the bottom of the page so that the joke is visible when button is clicked
      window.scrollTo(0, document.body.scrollHeight);
    });

});

