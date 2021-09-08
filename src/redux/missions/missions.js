/* eslint-disable linebreak-style */
import { ADD_MISSION, JOIN_MISSION } from './missions.types';

const initialMissions = [];

const MissionsReducer = (state = initialMissions, action) => {
  const missionsList = [...state];

  switch (action.type) {
    case JOIN_MISSION: {
      const mission = missionsList.map((rocket) => {
        if (rocket.id === action.rocketId) {
          if (rocket.reserved) {
            return { ...rocket, reserved: false };
          }
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return mission;
    }
    case ADD_MISSION: {
      const newMissions = [...action.payload];
      const filterMissions = newMissions.map((element) => ({
        id: element.mission_id,
        name: element.mission_name,
        description: element.description,
      }));
      return [...missionsList, ...filterMissions];
    }
    default:
      return missionsList;
  }
};

export default MissionsReducer;
