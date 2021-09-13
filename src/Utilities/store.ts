import { ScriptElementKind } from "typescript";
import { Status } from "../Models/Status";
import { Todos } from "../Models/Todo";

const usersKey : string = 'TodoList';

export const add = (todo:Todos) => {

            const  todoList = JSON.parse(localStorage.getItem(usersKey)!) || [];
            todoList.push(todo);
            localStorage.setItem(usersKey, JSON.stringify(todoList));

}
    
export const  getall =() : Todos[]  => {
            return JSON.parse(localStorage.getItem(usersKey)!) as Todos[];
}
export const getId = () => {
    const todolist = JSON.parse(localStorage.getItem(usersKey)!) as Todos[] || [];
    return todolist.length ? Math.max(todolist.length) + 1 : 1;
}
export const deleteTodo =(id:string) =>{
    const todolist = JSON.parse(localStorage.getItem(usersKey)!) as Todos[] || [];
    todolist.forEach((element,index)=>{
        if(element.id.toString() == id) todolist.splice(index,1);
    });
    localStorage.setItem(usersKey, JSON.stringify(todolist));
}
export const updateTodo =(id:string,date:Date,status:string) =>{
    const todolist = JSON.parse(localStorage.getItem(usersKey)!) as Todos[] || [];
    todolist.forEach((element,index)=>{
        if(element.id.toString() == id) 
        {
            element.completedDate = date;
            element.status = status;
        }
    });
    localStorage.setItem(usersKey, JSON.stringify(todolist));
}

