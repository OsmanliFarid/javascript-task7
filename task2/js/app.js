const addNewTodoForm = document.querySelector("#addNewTodoForm")
const NewTodoInp = document.querySelector("#NewTodoInp")

const todos = [
    {id:0,todo:'ders oxu',IsCompleted:true},
    {id:1,todo:'ders sonra eve get',IsCompleted:false},
    {id:2,todo:'ders getme',IsCompleted:false},
    {id:3,todo:'ders oxuma',IsCompleted:false},
]


const a1 = () =>{
    localStorage.setItem("todosBox",JSON.stringify(todos))
}
a1()
const todos2Json = localStorage.getItem("todosBox")
const todos2 = JSON.parse(todos2Json)










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
    
    todos2.map((item) =>{
        if(item.id == id){
            item.IsCompleted = !item.IsCompleted
        }
    })
    a1()
    showTodos(todos2)
}
const deleteTodo = (id) =>{
     
     todos2.forEach((item,index) =>{
        if(item.id == id){
            todos2.splice(index,1)
        }
     })
     a1()
     showTodos(todos2)
}
const editTodo = (id) =>{
    todos2.map((item) =>{
        if(item.id == id){
            const newTodo = prompt("deyisdirin0", item.todo)
            if(newTodo){
                item.todo = newTodo
            }else{
                 alert("duzgun yazin zehmet olmasa")
            }
        }
    })
    a1()
    showTodos(todos2)
}

addNewTodoForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const newTodo = {
        id:new Date().getTime(),
        todo:NewTodoInp.value,
        IsCompleted:false,
    }
    todos2.unshift(newTodo)
    a1()
    showTodos(todos2)
    NewTodoInp.value = ""
})


showTodos(todos2)
