/* eslint-disable linebreak-style */
import ADD_ROCKET from './rockets.types';

const initialRockets = [
];

const RocketReducer = (state = initialRockets, action) => {
  const rocketList = [...state];

  switch (action.type) {
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
