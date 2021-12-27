
import './App.css';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Form from './component/Form';
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert= (message, type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor = "#01072a "
      showAlert("Darkmode has been Enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Lightmode has been Enabled", "success")
    }
  }
  return (
    <div>
      <Navbar title="Textutills" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Form heading="Enter Text Here" mode={mode} showAlert={showAlert} />
    </div>
  );
}

export default App;
