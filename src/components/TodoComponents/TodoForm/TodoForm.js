import React from "react";

const TodoForm = (props) => {
  return (
    <div className="form-wrapper">
      <form>
        <input
          type="text"
          name="todo"
          placeholder="what to do?"
          onChange={props.inputChangeHandler}
        />
        <div className="buttons-wrapper">
          <button className='button-add' onClick={props.addTask}>add task</button>
          <button className='button-del' onClick={props.removeCompleted}> remove completed</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
