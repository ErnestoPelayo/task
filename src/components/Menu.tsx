import React from 'react';

type MenuProps = {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const Menu = ({ onView, onEdit, onDelete }: MenuProps) => {
  return (
    <div className="absolute top-0 right-0 bg-white border border-gray-300 rounded shadow-lg mt-8 w-40">
      <ul className="list-none p-1 m-0">
        <li>
          <button
            className="block px-4 py-2 text-left w-full hover:bg-gray-100"
            onClick={onView}
          >
            Ver
          </button>
        </li>
        <li>
          <button
            className="block px-4 py-2 text-left w-full hover:bg-gray-100"
            onClick={onEdit}
          >
            Editar
          </button>
        </li>
        <li>
          <button
            className="block px-4 py-2 text-left w-full hover:bg-gray-100"
            onClick={onDelete}
          >
            Eliminar
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
