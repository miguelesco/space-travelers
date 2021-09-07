/* eslint-disable linebreak-style */
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rockets.actions';
import { fetchMissions } from '../redux/missions/missions.actions';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './navbar/Navbar';
import ProfilePage from './profile/ProfilePage';
import Rockets from './rockets/MainRockets';
import MissionsPage from './missions/MissionsPage';

function App() {
  const { rocketReducer, missionsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  }, []);
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Rockets rockets={rocketReducer} />
        </Route>
        <Route path="/missions">
          <MissionsPage missions={missionsReducer} />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
