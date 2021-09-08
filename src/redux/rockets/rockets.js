/* eslint-disable linebreak-style */
import { ADD_ROCKET, RESERVE_ROCKET } from './rockets.types';

const initialRockets = [
];

const RocketReducer = (state = initialRockets, action) => {
  const rocketList = [...state];

  switch (action.type) {
    case RESERVE_ROCKET: {
      const rocket = rocketList.map((rocket) => {
        if (rocket.id === action.rocketId) {
          if (rocket.reserved) {
            return { ...rocket, reserved: false };
          }
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return rocket;
    }
    case ADD_ROCKET: {
      const newRockets = [...action.payload];
      const filterRockets = newRockets.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        img: rocket.flickr_images[0],
      }));
      return [...rocketList, ...filterRockets];
    }
    default:
      return rocketList;
  }
};

export default RocketReducer;
