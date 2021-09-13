import * as StoreData from "./Utilities/store"
import * as   inputs from "./Utilities/Inputs";
import  *  as render from "./Utilities/Render";

const form = document.querySelector('#todoform') as HTMLFormElement;
const loadbutton = document.querySelector('#GetTasks') as HTMLFormElement;
const Tasks = document.querySelector('#tbody')! as HTMLBodyElement;


export const _global = (window || global) as any
_global.deleteRow=(r:any)=>
{
    let row = r.parentNode.parentNode as HTMLTableRowElement;
    const id = row.cells[0].innerText;
    StoreData.deleteTodo(id);
    row.remove();
    
}
_global.updateRow=(r:any)=>
{
    let row = r.parentNode.parentNode as HTMLTableRowElement;
    const id = row.cells[0].innerText;
    StoreData.updateTodo(id,new Date(),'Finished');
    row.cells[2].innerText = 'Finished';
    row.className="bg-warning";
    
   
}


loadbutton.addEventListener('click', (e) => {

    var new_tbody = document.createElement('tbody');
    Tasks.parentNode!.replaceChild(new_tbody,Tasks);
    render.loadTodos();
    
});

form.addEventListener('submit',(e:Event) => {

        e.preventDefault();
       
        let responseStatus : inputs.ResponseStatus;
        const Todos  =  inputs.readInputs();
        const errorList =  inputs.validateInputs(Todos);
        responseStatus  =  inputs.renderErrors(errorList);
        if(responseStatus as inputs.ResponseStatus == inputs.ResponseStatus.success)
        {
            inputs.add(Todos);
            inputs.render(Todos);
            inputs.clearForm();
        }
});






