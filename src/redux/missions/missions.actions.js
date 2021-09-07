/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import ADD_MISSION from './missions.types';

export const addMission = (mission) => ({
  type: ADD_MISSION,
  payload: mission,
});

export const fetchMissions = () => async (dispatch) => {
  const res = await axios.get('https://api.spacexdata.com/v3/missions');
  dispatch(addMission(res.data));
};
