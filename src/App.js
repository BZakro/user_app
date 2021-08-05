import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {




  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;