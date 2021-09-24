import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./views/Home";
import Repositories from "./views/Repositories";
import Readme from "./views/Readme";

function App() {
  return (
    <Router>
      <Route exact path='/'><Home/></Route>
      <Route exact path='/:username'><Repositories/></Route>
      <Route exact path='/:username/:project'><Readme/></Route>
    </Router>
  );
}

export default App;
