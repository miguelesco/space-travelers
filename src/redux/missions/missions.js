/* eslint-disable linebreak-style */
import { ADD_MISSION, JOIN_MISSION } from './missions.types';

const initialMissions = [];

const MissionsReducer = (state = initialMissions, action) => {
  const missionsList = [...state];

  switch (action.type) {
    case JOIN_MISSION: {
      const mission = missionsList.map((mission) => {
        if (mission.id === action.missionId) {
          if (mission.member) {
            return { ...mission, member: false };
          }
          return { ...mission, member: true };
        }
        return mission;
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
