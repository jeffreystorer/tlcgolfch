import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";
import '../styles/App.css';
import Header from './Header';
import IndividualPage from './IndividualPage';
import LoginPage from './LoginPage';
import SelectTeesPage from './SelectTeesPage';

export default function App() {
  return (
      <Router>
      <Header />
      <br/>
      <nav>
        <NavLink exact to="/" className='navitem' activeStyle={{color:'#3378ac', fontWeight: 'bold'}}>My Data</NavLink>
        <NavLink exact to="/settings" className='navitem-last' activeStyle={{color:'#3378ac', fontWeight: 'bold'}}>Settings</NavLink>
      </nav>
      <Switch>
        <Route path="/settings" >
          <Settings />
        </Route>
        <Route path="/">
          <Individual />
        </Route>
      </Switch>
    </Router>
  );


  }

function Setting () {
  let {settingId } = useParams();
  let aSetting = settingId;
  switch (aSetting) {
    case "selecttees":
      return (
        <>
        <SelectTeesPage />
        </>
      )
  
    default:
      return (
        <>
          <LoginPage />
        </>
        )
  }

}

function Settings () {
  let {path, url} = useRouteMatch();
  return (
    <>
    <br></br>
    <nav >
      <NavLink exact to={`${url}/login`} className='navitem' activeStyle={{color:'#3378ac', fontWeight: 'bold'}}>Login</NavLink>
      <NavLink exact to={`${url}/selecttees`} className='navitem' activeStyle={{color:'#3378ac', fontWeight: 'bold'}}>Select Tees</NavLink>
    </nav>
      <Switch>
        <Route path={`${path}/:settingId`}>
          <Setting />
        </Route>
      </Switch>
    </>
  );
}




    
  function  Individual() {
    return (
      <>
      <br></br>
        <IndividualPage />
      </>
    )
  }