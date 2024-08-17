import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TaskClass } from "../types";
import ErrorMessage from "./ErrorMessage";

type FormTaskData = {
  register: UseFormRegister<TaskClass>;
  errors: FieldErrors<TaskClass>;
};

const FormEditTask = ({ register, errors }: FormTaskData) => {
  return (
    <div className="mt-2 space-y-2">
      <label htmlFor="title">Estado de la Tarea</label>
      <select
        id="state"
        className="bg-gray-50 border border-gray-300 block w-full p-2 rounded-lg"
        {...register("state", {
            required: "",
          })}
      >
        <option value="Pendiente">Pendiente</option>
        <option value="Proceso">En Proceso</option>
        <option value="Terminadas">Terminada</option>
        <option value="Archivadas">Archivada</option>
      </select>
      <label htmlFor="title">Titulo</label>
      <input
        id="title"
        type="text"
        className="w-full border border-gray-300 p-2 rounded-lg"
        {...register("title", {
          required: "El Titulo del Proyecto es obligatorio",
        })}
      />
      {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
      <label htmlFor="title">Descripción</label>
      <textarea
        id="title"
        className="w-full border border-gray-300 p-2 rounded-lg"
        {...register("description", {
          required: "La descripción es obligatorio",
        })}
      />
      {errors.description && (
        <ErrorMessage>{errors.description.message}</ErrorMessage>
      )}
    </div>
  );
};

export default FormEditTask;
