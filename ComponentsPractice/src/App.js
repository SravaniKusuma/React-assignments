
import './App.css';
import Greet from './compo/Greet';
import Welcome from './compo/Welcome';
import Message from './compo/Message';
import ParentComp from './compo/ParentComp';
import AgeCheck from './components/AgeCheck';
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets';
import styles from './AppStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">


      <FragmentDemo />
      <RefsDemo />


      {/* <LifeCycleA /> */}
      
      {/* <Form /> */}
      
      {/* <h1 className={styles.success}>Success</h1>
      <AgeCheck  name="Sravani"/> 
      <NameList />
      <StyleSheets primary={true} /> */}
      {/* <Counter /> 
      <ParentComp /> */}
     {/*} <Greet  name="Sravani" place="Warangal">
       <p>This is child component</p>
      </Greet>
     <Greet  name="Sagar" place="Mumbai">
       <button>Using Props</button>
      </Greet>
     <Greet  name="Soumya" place="Hyderabad"/>

     <Welcome  name="Sravani" place="Warangal"/>

     <Message /> */}

    </div>
  );
}

export default App;
