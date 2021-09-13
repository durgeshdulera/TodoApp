
import { Status } from "../Models/Status";
import * as Todos           from "../Models/Todo";
import * as Render         from "./Render";
import * as StoreData      from "./store";
import * as ValidatorLib   from "./Validators";

export const readInputs = () : Todos.Todos => {
    
    const todo = readForm();
    return new Todos.Todos(...todo);
}
export const validateInputs = (todo:Todos.Todos) : errors[] => {
    let errorList : errors[] = [];
    errorList.push({field: 'description',error:ValidatorLib.ValidateDescription(todo.description)});
    return errorList;
}
export const renderErrors = (errorList: errors[]) : ResponseStatus => {
        errorList.forEach(item =>{
            if(item.field == 'description' && item.field.length > 0){
                Render.renderErrors('#description_error',item.error);
            }
        });
    return errorList.find(e=>e.error.length > 0) ? ResponseStatus.failure : ResponseStatus.success;
}
export const render = (todo:Todos.Todos) => {
    Render.render(todo);
}
export const clearForm = () =>
{
    document.querySelectorAll('input').forEach(
        item => {
                    if(item.value != 'Submit') item.value = "";
                }
    );
}
export const readForm = () : [number,string,Date,string,Date] =>
{
    const description = document.querySelector('#description') as HTMLInputElement;
    console.log(description);
    return [StoreData.getId(),description.value,new Date(),Status[1],new Date()];
}

export const add = (todo:Todos.Todos) =>{
    StoreData.add(todo);
}
export const enum ResponseStatus
{
    success,
    failure
}




