import { useState } from "react";
import Modal from "../components/Modal";

function Index() {

  const [open,setOpen] = useState<boolean>(false)

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
      <Modal open={open} setOpen={setOpen}  />
    </div>
  );
}

export default Index;
