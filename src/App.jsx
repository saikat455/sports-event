import ScrollAnimation from "./components/ScrollAnimation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "/";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";

function App() {
  return (
    
    <><Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />


        <Route component={NotFound} />
      </Switch>
    </Router><div className="App">
        <ScrollAnimation />
      </div></>
  );
}

export default App;
