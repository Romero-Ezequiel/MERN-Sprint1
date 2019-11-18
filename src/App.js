import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/mostrar/home';
//'./screen/home';
import Login from './components/mostrar/login';
//'./screen/login';
import CreateAccount from './components/mostrar/crateAccount';
//'./screen/crateAccount';
import Cities from './components/mostrar/cities';
//'./screen/cities';


function App() {
  return (

    <div className="App">

    <Router >

    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/createAccount' component={CreateAccount} />
    <Route path='/cities' component={Cities} />

    </Router >

    </div>
  );
}

 export default App;
