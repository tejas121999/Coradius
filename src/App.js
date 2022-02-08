import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManeTable from './components/ManeTable'
import AddUser from './components/Adduser'
import EditUser from './components/EditUser'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ManeTable} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
      </Switch>
    </Router>
  );
}

export default App;
