const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokebtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
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