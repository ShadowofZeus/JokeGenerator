// get the joke
const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
//Any function with ASYNC infront of it returns a PROMISE!!
  const getJoke = async () => {
  
    const base = 'https://icanhazdadjoke.com/';
  
    const response = await fetch(base,requestOptions);
    const data = await response.json();
   // console.log(data);
    return data;   //.json method returns a promise so data will be a promise
                    //but when returned outside this function, it is a PROMISE!!
  };


  //How to use the async function
  //Since it returns a PROMISE - tack on the THEN statement to access the data.
  //  getJoke()
  //   .then((data) => {
  //     console.log(data.joke)
  //   });
 

 
   