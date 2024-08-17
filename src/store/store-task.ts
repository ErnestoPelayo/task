import { create } from "zustand";
import { TaskClass, TaskFormData } from "../types";
import {v4 as uuidv4} from "uuid"

type TaskState = {
    tasks : TaskClass[]
    addTask : (task : TaskFormData)=> void
}

const createTask =(task :TaskFormData ) : TaskClass =>{
    
    const newTask : TaskClass = {
        ...task,
        id:uuidv4(),
        state:"Pendiente"
    }
    return newTask
}

export const useStoreTask = create<TaskState>((set)=>({
    tasks : [],
    addTask : (task)=>{     
        const newTask = createTask(task)
        set((state)=>({
            tasks:[
                ...state.tasks,
                newTask
            ]
        }))
    }
}))