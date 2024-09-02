const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main1')
const form = document.getElementById('form1')
const search = document.getElementById('search1')

const getUser = async (username) => {
    try {
        const responce = await fetch(APIURL + username)
        const data = await responce.json();
        const card = `
            <div class="card">
                <div>
                    <img src="${data.avatar_url}" alt="image" class="avatar">
                </div>

                <div class="user-info">
                    <h2>${data.name}</h2>
                    <p>${data.bio}</p>
                
                    <ul>
                        <li>${data.followers}<strong>Followers</strong></li>
                        <li>${data.following}<strong>Following</strong></li>
                        <li>${data.public_repos}<strong>Repos</strong></li>
                    </ul>

                    <div id="repo"></div>
                </div>
            </div>
             
        
        `
            main.innerHTML = card;
            getRepos(username);
            console.log(data);
            

    } catch (error) {
        console.log(error.responce.status);
            if (error.responce.status == 404) {
                createErrorCard('No profile with this username')
            }
    }
}




const getRepos = async (username) => {
    try {
        const repos = document.getElementById("repo")
        const responce = await fetch(APIURL + username + "/repos")
        const data = await responce.json()
        console.log(data);

        data.map( (item) => {
            const elem = document.createElement("a")
            elem.classList.add("repo")
            elem.href = item.html_url
            elem.innerText = item.name
          

            elem.target = "_blank"
            repos.appendChild(elem)
        } )
        
    } catch (error) {
        createErrorCard('No Profile with this Username')
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user =  search.value

    if(user){
        getUser(user)

        search.value = ''
    }

})

function createErrorCard(msg) {
    const cardHtml = `
                    <div class="card">
                        <h1>${msg}</h1>
                    </div>
    `

    main.innerHTML = cardHtml
}