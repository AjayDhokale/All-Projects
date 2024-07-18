const clock = document.querySelector('#clock')



setInterval(function(){
    let date = new Date()
    const newtime = date.toLocaleTimeString()
    clock.innerHTML = newtime
},1000)