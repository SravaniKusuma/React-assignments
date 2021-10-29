
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { green, orange } from '@mui/material/colors';
import './App.css';
import Layout from './components/Layout';
import Notes from './Pages/Notes';
import Create from './Pages/Create';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FDA65D',
    },
    secondary: green
  },
  typography:{

    fontFamily:'Quicksand',
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:500

  }
  
})
function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Notes />
                </Route>
                <Route path="/create">
                  <Create />
                </Route>
              </Switch>
            </Layout>
          </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
