import * as Todo  from "../Models/Todo";
import * as StoreData from "./store"
import * as Status from "../Models/Status";



    export const  renderErrors = (id:string,errorMessage:string) => {

        const span = document.querySelector(id) as HTMLSpanElement;
        span.innerHTML = errorMessage;
        
    }

    export const  render = (todo:Todo.Todos) => {

       // Get a reference to the table
  let tableRef = document.querySelector('#Tasks') as HTMLTableElement;

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);
  // Insert a cell in the row at index 0
  let id = newRow.insertCell(0);
  let idvalue = document.createTextNode(`${todo.id}`);
  id.appendChild(idvalue);

  let description = newRow.insertCell(1);
  let descriptionValue = document.createTextNode(`${todo.description}`);
  description.appendChild(descriptionValue);

  let status = newRow.insertCell(2);
  let statusValue = document.createTextNode(`${todo.status}`);
  status.appendChild(statusValue);
        
   
   let row = "<button onclick='deleteRow(this);' class='btn btn-danger delete'>Delete</button>" 
  row+= "  <button onclick='updateRow(this);' class='btn btn-success finished'>Finished</button>";
  newRow.insertCell(3).innerHTML = row;
    
}
    




    export const  loadTodos = () =>{

        const todoList  = StoreData.getall();
        
        todoList.forEach(item => {
            
         render(item);
         });

    }
