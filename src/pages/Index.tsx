import { useReducer, useState } from "react";
import Modal from "../components/Modal";
import { initialState, TaskReducer } from "../reducers/task-reducer";

function Index() {

  const [open,setOpen] = useState<boolean>(false)

  const [state,dispatch] = useReducer(TaskReducer,initialState)
  
  return (
    <div>
      <button
        className="mt-5 bg-green-600 
            hover:bg-green-600 hover:scale-105 cursor-pointer 
            text-white font-bold p-3 px-3 rounded-lg"
            onClick={()=>setOpen(true)}
      >
        Crear Tarea
      </button>
      {
        state?.data.length!>0 ? <>
          {
            state?.data.map((item)=>{
              return <p>{item.title} {item.id}</p>
            })
          }
        </> :
        <div className="mt-10">
          <p className="p-2 text-center bg-red-400">No hay notas</p>
        </div>  
      }
      <Modal open={open} setOpen={setOpen} dispatch={dispatch}  />
    </div>
  );
}

export default Index;
