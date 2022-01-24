import { Route } from "react-router";
import Task from "./Task";

const View = () => {
  return (
    <>
      <Route exact path="/tasks">
        <Task />
      </Route>
    </>
  );
};
export default View;
