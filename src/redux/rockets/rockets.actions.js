/* eslint-disable linebreak-style */
import axios from 'axios';
import { ADD_ROCKET, RESERVE_ROCKET } from './rockets.types';

export const addRocket = (rocket) => ({
  type: ADD_ROCKET,
  payload: rocket,
});

export const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  rocketId,
});

export const fetchRockets = () => async (dispatch) => {
  const res = await axios.get('https://api.spacexdata.com/v3/rockets');
  dispatch(addRocket(res.data));
};
