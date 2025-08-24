function salvartarefa(){    
    const inputTarefa = document.getElementById('tarefa').value
    const listaTarefa = document.getElementById('lista')
    const novaTarefa = document.createElement('li')

    novaTarefa.textContent = inputTarefa

    listaTarefa.appendChild(novaTarefa)

}

