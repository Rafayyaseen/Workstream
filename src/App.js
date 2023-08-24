import './App.css';
import Login from './Login';
import { BrowserRouter, Router, Route, Switch  } from 'react-router-dom';
import CustomNavbar from './navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/navbar'>
            <CustomNavbar/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
