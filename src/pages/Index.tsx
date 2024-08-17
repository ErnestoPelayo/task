import { useState } from "react";
import Modal from "../components/Modal";
import Tasks from "../components/Tasks";
import { useStoreTask } from "../store/store-task";

function Index() {
  const [open, setOpen] = useState<boolean>(false);

  const task = useStoreTask(state=>state.tasks)
  console.log(task)
  return (
    <div>
      <button
        className="mt-5 bg-green-600 
            hover:bg-green-600 hover:scale-105 cursor-pointer 
            text-white font-bold p-3 px-3 rounded-lg"
        onClick={() => setOpen(true)}
      >
        Crear Tarea
      </button>
      {task?.length! > 0 ? (
        <div className="grid grid-cols-4 gap-2 relative">
          <Tasks  title="Pendientes" color={1} data={task?.filter(item=>item.state==="Pendiente")!} />
          <Tasks  title="En Proceso" color={2} data={task?.filter(item=>item.state==="Proceso")!}/>
          <Tasks  title="Terminadas" color={3} data={task?.filter(item=>item.state==="Terminadas")!}/>
          <Tasks  title="Archivadas" color={4} data={task?.filter(item=>item.state==="Archivadas")!}/>
        </div>
      ) : (
        <div className="mt-10">
          <p className="p-2 text-center bg-red-400">No hay notas</p>
        </div>
      )}

      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default Index;
