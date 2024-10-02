let inp=document.getElementById("addTask")
let uno=document.getElementById("todoList")

function add(){
    let list=document.createElement("li")
    list.innerHTML=inp.value+"<button onclick='del(event)' id='btn2'>x</button>"
    uno.append(list)
}

function del(event){
    event.target.parentElement.remove()
}
