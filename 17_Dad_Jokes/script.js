const jokeE1 = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await res.json()
    jokeE1.innerHTML = `${data.setup} - ${data.punchline}`
}




// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     const res  = await  fetch('https://icanhazdadjoke.com', config)

//     const data = await res.json()

//     jokeE1.innerHTML=  `${data.joke}` 
// }



// function generateJoke() {
//       const config = {
//         headers: {
//           Accept: 'application/json',
//         },
//       }
    
//       fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeE1.innerHTML = data.joke
//         })
//     }