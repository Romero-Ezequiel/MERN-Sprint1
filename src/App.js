import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './componentes/mostrar/home';
//'./screen/home';
import Login from './componentes/mostrar/login';
//'./screen/login';
import CreateAccount from './componentes/mostrar/crateAccount';
//'./screen/crateAccount';
import Cities from './componentes/mostrar/cities';
//'./screen/cities';

//fsdafsaf
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
