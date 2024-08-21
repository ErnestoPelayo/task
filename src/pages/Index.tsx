import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Tasks from "../components/Tasks";
import { useStoreTask } from "../store/store-task";
import { toast, ToastContainer } from "react-toastify";
import Info from "../components/Info";
import { TaskClass } from "../types";

function Index() {
  const [open, setOpen] = useState<boolean>(false);

  const task = useStoreTask((state) => state.tasks);
  const clearTasks = useStoreTask((state) => state.clearTasks);


  const clear = () => {
    toast.success("Se limpio el tablero");
    clearTasks();
  };

  const localStorageTasks = () : TaskClass[]=> {
    const tasks = localStorage.getItem('tasks')
    return tasks ? JSON.parse(tasks) : task
}

const taskss = localStorageTasks()

  useEffect(()=> {
    localStorage.setItem('task',JSON.stringify(task))
  },[taskss])

  return (
    <div>

      <Info />
      <div className="flex gap-2">
        <button
          className="mt-5 bg-green-500 
            hover:bg-green-600 hover:scale-105 cursor-pointer 
            text-white font-bold p-3 px-3 rounded-lg"
          onClick={() => setOpen(true)}
        >
          Crear Tarea
        </button>
        {taskss.length > 0 ? (
          <button
            className="mt-5 bg-red-500 
            hover:bg-red-600 hover:scale-105 cursor-pointer 
            text-white font-bold p-3 px-3 rounded-lg"
            onClick={clear}
          >
            Limpiar
          </button>
        ) : (
          []
        )}
      </div>

      {task.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2">
          <Tasks
            title="Pendientes"
            color={1}
            data={task?.filter((item) => item.state === "Pendiente")!}
          />
          <Tasks
            title="En Proceso"
            color={2}
            data={task?.filter((item) => item.state === "Proceso")!}
          />
          <Tasks
            title="Terminadas"
            color={3}
            data={task?.filter((item) => item.state === "Terminadas")!}
          />
          <Tasks
            title="Archivadas"
            color={4}
            data={task?.filter((item) => item.state === "Archivadas")!}
          />
        </div>
      ) : (
        <>
        <p className="text-lg font-bold p-10"> No hay notas </p>
        </>
      )}

      <ToastContainer />

      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default Index;
