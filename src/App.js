import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployeeList from "./pages/EmployeeList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/employee-list" component={EmployeeList} />
      </Switch>
    </Router>
  );
}

export default App;
