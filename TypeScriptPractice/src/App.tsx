import React from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/class/Counter';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import Greet from './components/Greet';
import { Input } from './components/Input';
import Random from './components/Random';
import { LoggedIn } from './components/state/LoggedIn';
import Status from './components/Status';
import Styling from './components/Styling';

function App() {
  const nameList=[
    {
      first:'Thrisha',
      last:'Bandi'
    },
    {
      first:'Harry',
      last:'Chandu'
    }
  ]
  return (
    <div className="App">
    <Greet name='Sravani'  messageCount={19} isLoggedIn={true} fullName={{first:'Srav', last:'Kusuma'}}
      namesList ={ nameList}/>
    <Status  status='success'>This is children of status</Status>
    <Button  handleClick={(event,id) => {console.log("button clikced",event,id)}}/>
    <br />
    <Input  value='' handleChange={ (event) => {console.log(event)}}/>
   
    <Styling  styles={{border:'1px solid red',padding:'1rem'}}/>
    <LoggedIn />
    <UserContextProvider>
      <User />
    </UserContextProvider>
    <Counter  message='Srav'/>
    <Random value={10}  isPositive/>



    </div>
  );
}

export default App;
