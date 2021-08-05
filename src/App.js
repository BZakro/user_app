import './App.css';
import Login from './pages/Login'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Profile } from './pages/Profile';


Amplify.configure(awsconfig);

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile/:id" component={Profile}/>
          <Route path="/login" component={Login}/>
          {/* <Route path="/" component={Login}/> */}
        </Switch>
      </Router>
    </div>
  );
}


export default App;