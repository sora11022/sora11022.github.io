import { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import '../styles/todo.scss';
const Todo = () => {
  const [todo, setTodo] = useState({
    plan: '',
    completed: false,
    change: false,
  });

  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('listTodo');
    if (storedTodos) {
      setListTodo(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listTodo', JSON.stringify(listTodo));
  }, [listTodo]);

  const handleAdd = (e) => {
    if (e.keyCode === 13) {
      if (todo.plan === '') {
        alert('Please select todo list');
      } else {
        const arr = [...listTodo];
        arr.push(todo);
        setListTodo(arr);
        setTodo({
          plan: '',
          completed: false,
        });
      }
    }
  };

  const handleChange = (id) => {
    const arrUpdate = [...listTodo];
    arrUpdate.length > 0 &&
      arrUpdate.map((item, idx) => {
        if (idx === id) {
          return (item.completed = !item.completed);
        }
        return item;
      });
    setListTodo(arrUpdate);
  };

  const handleEdit = (id) => {
    const updatedList = listTodo.map((item, index) => {
      if (index === id) {
        return { ...item, change: !item.change };
      }
      return item;
    });
    setListTodo(updatedList);
  };

  const handleKeyUp = (e, id) => {
    if (e.key === 'Enter') {
      handleEdit(id);
    }
  };

  const handleActive = (e, id) => {
    const arr = [...listTodo];
    arr &&
      arr.map((item, index) => {
        if (index === id) {
          return (item.plan = e.target.value);
        }
        return item;
      });
    setListTodo(arr);
  };

  const handleDelete = (idx) => {
    const arrUpdate = [...listTodo];
    arrUpdate.splice(idx, 1);
    setListTodo(arrUpdate);
  };

  return (
    <div className="todo_con">
      <h1>To do</h1>
      <div className="todo_con--input">
        <input
          type="text"
          placeholder="What you need to do?"
          value={todo.plan}
          onChange={(e) => {
            setTodo((prev) => ({ ...prev, plan: e.target.value }));
          }}
          onKeyUp={(e) => handleAdd(e)}
        />
        <ul>
          {listTodo &&
            listTodo.map((item, index) => (
              <li key={index}>
                <TodoList
                  id={index}
                  item={item}
                  handleDelete={handleDelete}
                  handleChange={handleChange}
                  completed={item.completed}
                  handleEdit={handleEdit}
                  handleActive={handleActive}
                  handleKeyUp={handleKeyUp}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
