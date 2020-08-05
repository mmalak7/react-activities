import React from "react";
import Todo from "../Todo/Todo";
import Grid from '@material-ui/core/Grid';


export const TodoList = (props) => {
  return (
    <Grid container spacing={6} className='list-wrapper'>
      {props.todos.map((todo, id) => (
        <Todo todo={todo} key={id} toogleCompleted={props.toogleCompleted} />
      ))}
    </Grid>
  );
};
