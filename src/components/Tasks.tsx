import { TaskClass } from "../types"
import Card from "./Card"

type PropsTask ={
    title:string,
    color:number,
    data:TaskClass[]
}

const Tasks = ({title,color,data}:PropsTask) => {

  return (
      <div className="border border-gray-700 rounded-lg mt-10 mb-10">
          <p className={
              color === 1 ?`rounded-t-lg font-bold p-1 text-center bg-yellow-400` : 
              color === 2 ?`rounded-t-lg font-bold p-1 text-center bg-blue-400`:
              color === 3 ? `rounded-t-lg font-bold p-1 text-center bg-green-400`:
              `rounded-t-lg font-bold p-1 text-center bg-red-400`} >
            {title}
          </p>
          <>
            {data &&
              data.map(item=>{
                return(
                    <Card key={item.id} task={item} />
                )
              })
            }
          </>          
      </div>
  )
}

export default Tasks
