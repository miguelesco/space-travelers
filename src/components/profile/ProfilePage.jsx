/* eslint-disable linebreak-style */
import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';

const ProfilePage = (props) => {
  const { rockets, missions } = props;
  const [reservedRockets, setReservedRockets] = useState([]);
  const [joinedMissions, setJoinedMissions] = useState([]);
  useEffect(() => {
    setReservedRockets(rockets.filter((rocket) => rocket.reserved));
  }, [rockets]);
  useEffect(() => {
    setJoinedMissions(missions.filter((mission) => mission.member));
  }, [missions]);
  return (
    <div className="row mx-5 mt-4">
      <div className="col">
        <h2>My Missions</h2>
        <table className="table table-bordered table-hover">
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col">
        <h2>My Rockets</h2>
        <table className="table table-bordered table-hover">
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;

ProfilePage.propTypes = {
  rockets: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.number,
    name: Proptypes.string,
    description: Proptypes.string,
    img: Proptypes.string,
    reserved: Proptypes.bool,
  })).isRequired,
  missions: Proptypes.arrayOf(Proptypes.shape({
    id: Proptypes.string,
    name: Proptypes.string,
    description: Proptypes.string,
    member: Proptypes.bool,
  })).isRequired,
};
