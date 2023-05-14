// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Textutil from './components/textutility';
import Alert from './components/alert';
import { useState } from 'react';
import React from "react";

function App() {
  const [mode, newmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }
  const togglemode = () => {
    if (mode === 'light') {
      newmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled", "Success");
    }
    else {
      newmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");
    }
  }

  return (
    <>
          <Navbar title='TextUtils' home='Home' mode={mode} togglemode={togglemode}/>
          <Alert alert={alert}/>
          <Textutil Text="Try Text Utils ... " mode={mode} showAlert={showAlert}/>
    
    </>
    
  );
}

export default App;
