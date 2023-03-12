document.querySelector('#Btn').addEventListener('click', () =>{
    rd = Math.floor(Math.random() * 256)
    grn =Math.floor(Math.random() * 256)
    blu = Math.floor(Math.random() * 256)
    alph = document.getElementById('inp').value
    rgbaColor =` rgba( ${rd}, ${grn}, ${blu}, ${alph})`
        document.getElementById('output').innerHTML =rgbaColor;
       document.body.style.backgroundColor = rgbaColor;
});

document.getElementById('inp').addEventListener('change', () =>{
    alph = document.getElementById('inp').value;
    rgbaColor =` rgba( ${rd}, ${grn}, ${blu}, ${alph})`
    document.getElementById('output').innerHTML =rgbaColor;
   document.body.style.backgroundColor = rgbaColor;

})