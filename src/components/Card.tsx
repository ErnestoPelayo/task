import  { useState } from 'react';
import { TaskClass } from "../types";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Menu from './Menu';

type PropsCard = {
  task: TaskClass;
};

const Card = ({ task }: PropsCard) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleView = () => {
    console.log('Ver');
    setIsMenuOpen(false);
  };

  const handleEdit = () => {
    console.log('Editar');
    setIsMenuOpen(false);
  };

  const handleDelete = () => {
    console.log('Eliminar');
    setIsMenuOpen(false);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className="w-full p-1 relative">
      <div className="bg-slate-200 p-2 rounded-lg space-y-2">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-lg font-bold">{task.title.toUpperCase()}</p>
          </div>
          <button onClick={toggleMenu} className="relative">
            <EllipsisVerticalIcon aria-hidden="true" className="h-6 w-6" />
            {isMenuOpen && (
              <Menu key={task.id}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </button>
        </div>
        <p className="text-sm font-extralight">
          {truncateText(task.description, 150)}
        </p>
      </div>
    </div>
  );
};

export default Card;
