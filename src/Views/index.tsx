import { Route } from "react-router";
import Profile from "./Profile";
import Task from "./Task";

const View = () => {
  return (
    <>
      <Route exact path="/tasks">
        <Task />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </>
  );
};
export default View;
