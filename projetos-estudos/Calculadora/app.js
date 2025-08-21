function insertToDisplay(data){    
    document.querySelector('#dp').value+= data
    
};
function limpar(){
     document.querySelector("#dp").value = '';
};
 function back(){
    const dp = document.querySelector('#dp')
    dp.value = dp.value.slice(0, -1)
 }
 