// 1 - Inserir dado
localStorage.setItem("name", "Lucas")//O primeiro parâmetro é a chave e o segundo é o valor

// 2 - restart sem perder dados

// 3- Resgatar item
const name = localStorage.getItem("name")//O parâmetro é a chave do item
console.log(name)

// 4 - Resgatando um item que não existe
const lastName = localStorage.getItem("lastName")
console.log(lastName)

if (!lastName){
    console.log("Sem sobrenome!")
}

// 5 - remover item
localStorage.removeItem("name")//O parâmetro é a chave do item

// 6 - Limpar todos os itens
localStorage.setItem("a", 1)
localStorage.setItem("b", 2)

    //console.log(typeof localStorage.getItem("a")) independentemente do tipo de dado inserido, o mesmo é convertido para string no localStorage

localStorage.clear()//Não recebe nenhum argumento, apaga tudo do localStorage


// 7 - session storage
sessionStorage.setItem("number", 123)

// 8 - reiniciar e perder dados

const num = sessionStorage.getItem("number")
console.log(num)

sessionStorage.removeItem("number")

sessionStorage.clear()

// 9 - salvar objeto

const person = {
    name: "Lucas",
    age: 24,
    job: "Programmer",
}

//localStorage.setItem("person", person) Assim NÃO!
// É preciso converter para o formato json

localStorage.setItem("person", JSON.stringify(person))

const getPerson = localStorage.getItem("person")
console.log(typeof getPerson)
console.log(getPerson)//nesse caso o objeto ainda é um texto(string)
// é preciso converter para objeto novamente

const personObject = JSON.parse(getPerson)
console.log(typeof personObject)
console.log(personObject)