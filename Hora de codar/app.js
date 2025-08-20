const h2 = document.querySelector('h2')
const campotext = document.getElementById("campotext");
const botaoenviar = document.getElementById("button");

botaoenviar.addEventListener('click', function() {
   const newtext = campotext.value;
    
   if (newtext.trim()!==''){
    h2.textContent = newtext;

   };
    
});
