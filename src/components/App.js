/* eslint-disable linebreak-style */
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <h1>home</h1>
        </Route>
        <Route path="/test">
          <h2> test</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
