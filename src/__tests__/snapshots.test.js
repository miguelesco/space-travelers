/* eslint-disable linebreak-style */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/rockets/MainRockets';
import Missions from '../components/missions/MissionsPage';
import Profile from '../components/profile/ProfilePage';
import store from '../redux/configureStore';

describe('Tests snapshots of components', () => {
  const rockets = [
    {
      id: 1,
      name: 'Falcon 1',
      description: 'rocket',
      img: 'https://s3.amazonaws.com/launchlibrary/RocketImages/falcon1_1920.jpg',
      reserved: true,
    },
  ];

  const missions = [
    {
      id: '1',
      name: 'Go Mars',
      description: 'Yes we can',
      member: false,
    },
  ];

  it('renders correctly', () => {
    const rocketsTree = renderer
      .create(
        <Provider store={store}>
          <Rockets rockets={rockets} />
        </Provider>,
      )
      .toJSON();
    expect(rocketsTree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const missionsTree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(missionsTree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const profileTree = renderer
      .create(
        <Provider store={store}>
          <Profile rockets={rockets} missions={missions} />
        </Provider>,
      )
      .toJSON();
    expect(profileTree).toMatchSnapshot();
  });
});
