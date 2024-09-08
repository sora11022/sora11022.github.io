import React from 'react';
import '../styles/todolist.scss';
const TodoList = ({
  id,
  item,
  handleDelete,
  handleChange,
  handleEdit,
  handleActive,
  completed,
  handleKeyUp,
}) => {
  return (
    <div className="item">
      <div className="item_todo mt-10">
        <div className={`flex ${completed ? 'status' : ''}`}>
          <div className="item_todo__icon" onClick={() => handleChange(id)}>
            <i className="fa-solid fa-check"></i>
          </div>
          {!item.change ? (
            <div className="item_todo__plan">{item.plan}</div>
          ) : (
            <input
              type="text"
              value={item.plan}
              onKeyUp={(e) => handleKeyUp(e, id)}
              onChange={(e) => handleActive(e, id)}
            />
          )}
        </div>

        <div className="item_todo__change">
          <div onClick={() => handleEdit(id)}>
            {!item.change ? (
              <i className="fa-solid fa-pen mr-3"></i>
            ) : (
              <i className="fa-solid fa-check mr-3"></i>
            )}
          </div>
          <div onClick={() => handleDelete(id)}>
            <i className="fa-solid fa-circle-minus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
