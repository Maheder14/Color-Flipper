document.querySelector('#Btn').addEventListener('click', () =>{
    let rd = Math.floor(Math.random() * 256)
   let grn =Math.floor(Math.random() * 256)
    let blu = Math.floor(Math.random() * 256)
    let rgbColor =` rgb( ${rd}, ${grn}, ${blu})`
        document.getElementById('output').innerHTML =rgbColor;
       document.body.style.background = rgbColor;
})
