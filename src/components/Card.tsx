import { useStoreTask } from "../store/store-task";
import { TaskClass } from "../types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ModalEditTask from "./ModalEditTask";
import { useState } from "react";

type PropsCard = {
  task: TaskClass;
};

const Card = ({ task }: PropsCard) => {

  const removeTask = useStoreTask(state=>state.removeTask)
  const [open, setOpen] = useState<boolean>(false);
  const [idTask,setIdTask] = useState(task.id)
  
  const clickHandled = () => {
    setOpen(true)
    setIdTask(idTask)
  };

  const removeTaskHandled = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    removeTask(task.id)
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="w-full p-1 relative cursor-pointer">
      <div className="bg-slate-200 p-2 rounded-lg space-y-2" onClick={clickHandled}>
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-lg font-bold">{task.title.toUpperCase()}</p>
          </div>
          <button className="relative" onClick={removeTaskHandled}>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <p className="text-sm font-extralight">
          {truncateText(task.description, 150)}
        </p>
      </div>
      <ModalEditTask open={open} setOpen={setOpen} task={task} />
    </div>
  );
};

export default Card;
