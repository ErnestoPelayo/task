import {v4 as uuidv4} from "uuid"

export type TaskClass = {
    id:string,
    title:string,
    description:string,
    state:string
}

export type TaskFormData = Pick<TaskClass,'title'| 'description'>