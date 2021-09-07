import uuid from 'react-uid';

const initialMissions = [
  {
    id: uuid(),
    title: 'Test',
    description: 'lorem ipsum',

  },
];

const MissionsReducer = (state = initialMissions, action) => {
  const missionsList = [...state];

  switch (action.type) {
    default:
      return missionsList;
  }
};

export default MissionsReducer;
