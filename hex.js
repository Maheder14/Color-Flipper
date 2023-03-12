

document.getElementById('Btn').addEventListener('click', () =>{
    let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let random1 = Math.floor(Math.random()*arr.length)
    let random2 = Math.floor(Math.random()*arr.length);
    let random3 = Math.floor(Math.random()*arr.length);
    let random4 = Math.floor(Math.random()*arr.length);
    let random5 = Math.floor(Math.random()*arr.length);
    let random6 = Math.floor(Math.random()*arr.length);

    let hex = arr[random1]+arr[random2]+arr[random3]+arr[random4]+arr[random5]+arr[random6]
    document.body.style.background = `#${hex}`
    document.getElementById('output').innerHTML = `#${hex}`;
})

