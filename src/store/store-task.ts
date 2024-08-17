import { create } from "zustand";
import { TaskClass, TaskFormData } from "../types";
import {v4 as uuidv4} from "uuid"
import { dbTask } from "../helpers/dbTask";

type TaskState = {
    tasks : TaskClass[]
    addTask : (task : TaskFormData)=> void,
    clearTasks : ()=>void,
    removeTask : (id:TaskClass['id']) => void,
    updateTask : (task : TaskClass)=>void,
    test:()=>void,
}

const createTask =(task :TaskFormData ) : TaskClass =>{
    
    const newTask : TaskClass = {
        ...task,
        id:uuidv4(),
        state:"Pendiente"
    }
    return newTask
}

export const useStoreTask = create<TaskState>((set,get)=>({
    tasks : dbTask,
    addTask : (task)=>{     
        const newTask = createTask(task)
        set((state)=>({
            tasks:[
                ...state.tasks,
                newTask
            ]
        }))
    },
    clearTasks : ()=>{
        set(()=>({
            tasks:[]
        }))
    },
    removeTask : (id) =>{
        const newState = get().tasks.filter(item=>item.id !== id)
        set(()=>({
            tasks:newState
        }))
    },
    updateTask: (task) => {
        const newState = get().tasks.map(item => item.id === task.id ? task : item);
        set(() => ({
          tasks: newState 
        }));
      },
      test : () =>{
        console.log("test")
      }
      
}))