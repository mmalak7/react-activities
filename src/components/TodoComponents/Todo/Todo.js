import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Todo = (props) => {
  return (
    <Grid item xs={4} lg={2} md={2} >
      <Card className="list-element-wrapper">
        <CardContent className="card-content">
          <Typography color="textSecondary">just simple</Typography>
          <Typography variant="h5" component="h2">
            {props.todo.task}
          </Typography>
          <CardActions>
            <input
              id="toCheck"
              key={props.todo.id}
              onClick={(event) => props.toogleCompleted(props.todo.id)}
              type="checkbox"
            />
            <label>Complete</label>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Todo;
