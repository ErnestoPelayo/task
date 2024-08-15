
const FormTask = () => {
  return (
    <div className="mt-2 space-y-2">
      <label htmlFor="title">Titulo</label>
      <input id="title" type="text" className="w-full border border-gray-300 p-2" />
      <label htmlFor="title">Descripción</label>
      <textarea id="title" className="w-full border border-gray-300 p-2" />
    </div>
  )
}

export default FormTask
