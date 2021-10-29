
import './App.css';
import Arrays from './components/Arrays';
import ComponentC from './components/ComponentC';
import DataFetching from './components/DataFetching';
import Effect from './components/Effect';
import Form from './components/Form';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalCounter from './components/IntervalCounter';
import MouseContainer from './components/MouseContainer';
import {UserProvider} from './components/UserContext'
import React from 'react';


export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      
      <UserProvider  value="Sravani">
        <ChannelContext.Provider value="Codevolution">
            <ComponentC />
        </ChannelContext.Provider>
      </UserProvider>
      
     <DataFetching /> 
      {/* <IntervalCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <Effect /> */}
      {/* <Arrays /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo />  */}
      {/* <Form />  */}

    </div>
  );
}

export default App;
