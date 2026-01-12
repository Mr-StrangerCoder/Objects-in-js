

let array = []

function setLocal(data = array){
    localStorage.setItem('b69', JSON.stringify(data))
}

function getFromLocal(){
    return  JSON.parse(localStorage.getItem('b69'))
}

function showTask(data= array){
  document.querySelector("#data").innerHTML = data.map((task , i)=>`   <tr>
      <th scope="row">${i+1}</th>
      <td>${task.name}</td>
      <td>${task.status}</td>
      <td><button onclick = 'updateTask(i)'>Edit</button></td>
      <td><button id = 'deleteBTN' onclick= 'deleteTask(${i})'>Delete</button></td>
    </tr>`).join("")
  
}

function addNewTask(){
  inputElmt = document.querySelector("#inPutTask")
  inputTask = inputElmt.value


  newTask ={
    name : inputTask,
    status : "Pendig",
    id: Date.now()
  }

  let dataFromLocal = getFromLocal()
  dataFromLocal.push(newTask)
  setLocal(dataFromLocal)
  showTask( dataFromLocal)
}

function deleteTask(i){
    const dataFromLocal = getFromLocal()
    dataFromLocal.splice(i, 1)
  setLocal(dataFromLocal)
  showTask( dataFromLocal)
}

function updateTask(i){
    const dataFromLocal = getFromLocal()

   
    dataFromLocal[i].status = "Complete"
  setLocal(dataFromLocal)
  showTask( dataFromLocal)

    

}
window.addEventListener('DOMContentLoaded', ()=>{
    const dataFromLocalOnLoad = getFromLocal()
    if(!dataFromLocalOnLoad){
        setLocal()
    }
    showTask(dataFromLocalOnLoad)
})

