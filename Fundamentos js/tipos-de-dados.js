// Tipos de dados String, Number, Boolean, Object, Array, Null, Undefined

    //Dados em String Soo dados de Texto como um (nome, local...)

    var x = 'Hello world!';
    console.log(x);

    //São definidos com aspas simples ('') Ou aspas Duplas ("")

    //Dados em Number sao dados Numericos como (1, 2, 3.....)

    var x = 10;
    console.log(x);

    //Diferente de uma string nao precisamos usar aspas so atribir um valor o java script ja identifica o tipo. podem ser inteiros (10) decimais (3.314324) ou Negativos (-10)

    //Dados Boolean Sao dados que guardam valores de True e False. Normalmente utilizado em condições e loops para controlar o fluxo do programa
    
    const login = true
    const permissao = false
    
    //Object Utilizado para Dados Relacionais/Aributos/Configuraçoes ou Opções/Função que retorna multiplos valores/Parametros nomeados

    const pessoa = {
        nome: 'erick',
        idade: 19,  
    }
    console.log(pessoa)

    //Array são listas 

    const frutas = [ 
        'banana','maca','morango','uva'
    ]

    //Como pode ser usado 
    //Guardar Lista de valores como nome, numeros, objetos etc
    //Acessar valores por indice, Cada elmento tem uma posiçao começando por (0) entao acima o valor 0 = banana
    //Manipulação de coleçõo de dados arrays tem metodos e propriedades para Adicionar, Remonver, Buscar, Filtrar,Ordenar e transformar dados.

    //Null representa a ausencia intensional de valor 

    const nome = null;
    console.log(nome)

    //Undefined representa um valor que ainda nao foi definido 

    let a;
    console.log(a);

    //Como pode ver a variavel (a) nao recebeu nenhum valor assim no terminal tem um valor undefined
    