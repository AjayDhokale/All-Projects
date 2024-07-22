const openbtn = document.querySelector('#open')
const closebtn = document.querySelector('#close')
const containers = document.querySelector('.container')
const cirContain1 = document.querySelector('.circle-container1')
const cirContain2 = document.querySelector('.circle-container2')



openbtn.addEventListener('click', () => {
    containers.classList.add('show-nav')
    console.log("open clicked");
    cirContain1.classList.add('hide');
    cirContain2.classList.remove('hide');
})

closebtn.addEventListener('click', ()=>{
    containers.classList.remove('show-nav')
    console.log("close clicked");
    cirContain1.classList.remove('hide');
    cirContain2.classList.add('hide');
})