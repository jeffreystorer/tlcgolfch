import React, {useEffect} from 'react';
import '../styles/App.css';
import {get, set} from '../functions/localStorage';
import setIsLoggedIn from '../functions/setIsLoggedIn';
import preval from 'preval.macro';


function LoginPage() {
  const build = "Build: " + preval`module.exports = new Date().toLocaleString();`


  let ghinNumber, lastName;
  ghinNumber = get('ghinNumber') ? get('ghinNumber') : "GHIN Number";
  lastName = get('lastName') ? get("lastName") : "Last Name";
  let teesSelected = get('teesSelected');

  useEffect(() => {
    localStorage.clear();
    set('isLoggedIn', "false");
   /*  //eslint-disable-next-line
    ghinNumber = "";
    //eslint-disable-next-line
    lastName = ""; */
    ////eslint-disable-next-line
  },[]);
  
  useEffect(() => {
    set('ghinNumber', ghinNumber);
  }, [ghinNumber]);

  useEffect(() => {
    set('lastName', lastName);
  }, [lastName]);

  function handleClick(e){
    set("dataMode", "ghin");
    set('ghinNumber', ghinNumber);
    set('lastName', lastName);
    setIsLoggedIn(ghinNumber, lastName);
    set('teesSelected', teesSelected)
    document.location='/settings/selecttees';
    }

  return (
      <>
        <div className='center' id='change-golfer'>
        <br></br>
          <div>
            <label htmlFor='ghinnumber'>GHIN Number:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input 
              type="text" 
              id="ghinnumber" 
              name="ghinnumber"
              defaultValue={ghinNumber}
              onFocus={event => event.target.value = get('ghinNumber')}
              onBlur={event => ghinNumber = event.target.value}
            />
          </div>

            <br></br><br></br>
          
          <div>
            <label htmlFor='lastName'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Last Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName"
              defaultValue={lastName}
              onFocus={event => event.target.value = get('lastName')}
              onBlur={event => lastName = event.target.value}
            />
          </div>
          <br/><br/>
          <div>
             <button 
              onClick={handleClick}
              >
                Next 
            </button>
          </div>
          <br></br>
          <br></br>
          <footer align='center'>
              {build}
          </footer>
        </div>
      </>
  );
}


export default LoginPage;