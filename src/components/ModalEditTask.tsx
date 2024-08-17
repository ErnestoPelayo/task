import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
  } from "@headlessui/react";
  import { PencilIcon } from "@heroicons/react/24/outline"
import { TaskClass } from "../types";
import FormEditTask from "./FormEditTask";
import { useForm } from "react-hook-form";
import { useStoreTask } from "../store/store-task";
import { toast } from "react-toastify";

  type PropsModal = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    task : TaskClass
  }
  
const ModalEditTask = ({open,setOpen,task}:PropsModal) => {

  const updateTask = useStoreTask(state=>state.updateTask)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      id:task.id,
      title: task.title,
      description: task.description,
      state:task.state
    },
  });

  const handleForm = (data: TaskClass) => {
    updateTask(data)
    reset();
    setOpen(false);
    toast.success("Tarea Actualizada")
  };
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                  <PencilIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-yellow-600"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Actualizar Tarea
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      task id: {task.id}
                    </p>
                  </div>
                  <div className="w-full">
                    <form onSubmit={handleSubmit(handleForm)} noValidate>
                      <FormEditTask register={register} errors={errors} />
                      <input
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:w-auto "
                        value={"Actualizar Tarea"}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ModalEditTask