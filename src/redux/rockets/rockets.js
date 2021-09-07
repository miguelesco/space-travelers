/* eslint-disable linebreak-style */
import uuid from 'react-uuid';

const initialRockets = [
  {
    id: uuid(),
    img: '../../../assets/images/rocket.jpg',
    title: 'Falcon 1',
    reserve: false,
    description: 'loremIpsum loremIpsum loremIpsuml oremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsum',
  },
  {
    id: uuid(),
    title: 'Falcon 9',
    reserve: true,
    img: '../../../assets/images/rocket.jpg',
    description: 'loremIpsum loremIpsum loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsum',
  },
  {
    id: uuid(),
    title: 'Falcon Heavy',
    reserve: false,
    img: '../../../assets/images/rocket.jpg',
    description: 'loremIpsum loremIpsum loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsum',
  },
];

const RocketReducer = (state = initialRockets, action) => {
  const rocketList = [...state];

  switch (action.type) {
    default:
      return rocketList;
  }
};

export default RocketReducer;
