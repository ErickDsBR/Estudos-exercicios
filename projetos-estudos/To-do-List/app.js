function salvartarefa(){    
    //este captura o valor do input no html trazendo o valor para ser manipulado no html
    const inputTarefa = document.getElementById('tarefa').value
    // esta entrando valor vazio na lista ainda par resolver...
    if(inputTarefa == ''){
        document.getElementById('erro').innerText = 'Digite Alguma Tarefa!'
    }

    //selecionar aonde vai ser adicioado o elemento para lista
    const listaTarefa = document.getElementById('lista')

    // createElement serve para criar um elemento html 
    const novaTarefa = document.createElement('li')

    novaTarefa.textContent = inputTarefa

    // appendChild adicionar o elemento ao html aonde foi selecionado no nova tarefa
    listaTarefa.appendChild(novaTarefa)

}
