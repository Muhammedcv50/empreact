// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Button from './components/Button'
import InputField from './components/InputField'
import TextField from './components/TextField';
import { useEffect } from "react";
import CreateEmployee from './pages/CreateEmployee';
var count=0;

function App() {

  const[userName,setUserName] = useState('');
  const [displayName,setDisplayName]=useState('');

 


  useEffect(() => {
    setUserName("myname");
    //Runs only on the first render
  },[]);

  useEffect(() => {             //ussefect2  this also runs initially, and runs when usestate given to displayname
    if(displayName!=='') {

      count=count+1;
      setUserName(`clicked ${count} times `)
    }
    
  },[displayName]);







  const onUserNameChange = (value) =>{
    setUserName(value);
  }

  const onUserNameChange2 = () =>{
    setDisplayName(userName);
  }

  return (
    <div className="App">
      {/* <Button label="Clik Here man" handleClick={onUserNameChange2}/>  */}
      <Button label="Clik Here man" handleClick={()=>setDisplayName(userName)}/> 


      {/* <InputField label='' onChange={usernamechange}/> */}
     
      <InputField text={userName }/>
      <TextField text={userName}/> 
      <br/>
      <TextField text={displayName}/>
      <CreateEmployee/>
    </div>
    
  );
}

export default App;
