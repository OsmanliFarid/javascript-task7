const addNewTodoForm = document.querySelector("#addNewTodoForm")
const NewTodoInp = document.querySelector("#NewTodoInp")

const todos = [
    {id:0,todo:'ders oxu',IsCompleted:true},
    {id:1,todo:'ders sonra eve get',IsCompleted:false},
    {id:2,todo:'ders getme',IsCompleted:false},
    {id:3,todo:'ders oxuma',IsCompleted:false},
]
let updateBox = () =>{
    localStorage.setItem("todosBox",JSON.stringify(todos))
}

const todosBoxJson = localStorage.getItem("todosBox")

const todosBox = JSON.parse(todosBoxJson)
console.log(todosBox);




const showTodos = (arr) =>{
    const tbody = document.querySelector("#tbody")
    tbody.innerHTML = ""
    arr.forEach((item, index, arr) =>{
    
    
    tbody.innerHTML += `<tr class="${item.IsCompleted ? 'completed' : 'notCompleted'}">
                <td>
                    ${item.todo}
                </td>
                <td>
                    <input type="checkbox" ${item.IsCompleted ? 'checked' : null} onchange="setCompleted('${item.id}')">
                </td>
                <td><button onclick="editTodo('${item.id}')">edit</button><button onclick="deleteTodo('${item.id}')">delete</button></td>
            </tr>`
    })
    
}

const setCompleted = (id) =>{
    
    todosBox.map((item) =>{
        if(item.id == id){
            item.IsCompleted = !item.IsCompleted
        }
    })
    showTodos(todosBox)
}
const deleteTodo = (id) =>{
     
     todosBox.forEach((item,index) =>{
        if(item.id == id){
            todosBox.splice(index,1)
        }
     })
     updateBox()
     showTodos(todosBox)
}
const editTodo = (id) =>{
    todosBox.map((item) =>{
        if(item.id == id){
            const newTodo = prompt("deyisdirin0", item.todo)
            if(newTodo){
                item.todo = newTodo
            }else{
                 alert("duzgun yazin zehmet olmasa")
            }
        }
    })
    updateBox()
    showTodos(todosBox)
}

addNewTodoForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const newTodo = {
        id:new Date().getTime(),
        todo:NewTodoInp.value,
        IsCompleted:false,
    }
    todosBox.unshift(newTodo)
    updateBox()
    showTodos(todosBox)
    NewTodoInp.value = ""
})


showTodos(todosBox)
updateBox()