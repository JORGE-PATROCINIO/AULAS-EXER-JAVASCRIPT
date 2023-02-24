//######################  MANIPULAÇÃO DA DOM (documents object model) ############################

const inputItem = document.getElementById("input-item");
//const inputItem = document.getElementsByTagName("input");
//const inputItem = document.querySelector("#input-item");
//const inputItem = document.getElementsByClassName("list-input");

//const {body} = document;
//const todo = document.createElement("span");
//todo.innerText = "olá" // inclui texto no html pelo js!
//body.appendChild(todo);

//######################################################

const showItems= document.getElementById("show-items");
//showItems.innerHTML = "<h2>LISTA 2</h2>"  // inclui itens diretamente no html pelo javascript!


//############################## EVENTS ##################################################

//const btnAdd = document.getElementById("add");
//btnAdd.addEventListener("click",() =>{alert("olá")});
const btnAdd = document.getElementById("add");
btnAdd.addEventListener("click",() =>{
    const todo = document.createElement("span");
    const todoValue = inputItem.value;
   
    todo.innerText = todoValue;
    
    showItems.appendChild(todo)
    localStorage.setItem(localStorage.length + 1, todoValue)

    showItems.firstChild ? showItems.style =`
     background-color:red;
     padding:20px;
     border-radius:4px;
     width:400px;
     box-shador: 0px 0px 4px #000;
     margin:10px;
     color:#fff;
     display:flex;
     flex-direction :column;
     font-weight: bold;
     `:null
});


 

    //############################## mouseenter###############################



//showItems.addEventListener("mouseenter",() =>{alert("salve")}); // msg de alerta a passar o mouse no botão!

//showItems.addEventListener("mouseout",() =>{alert("salve")});  //  msg de alerta a tirar o mouse do botão!

function mostrar(btnAdd){
   conteudo.indexof(btnAdd)
}

console.log(mostrar)
