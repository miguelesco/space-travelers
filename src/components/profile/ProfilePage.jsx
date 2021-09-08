/* eslint-disable linebreak-style */
import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';

const ProfilePage = (props) => {
  const { rockets } = props;
  const [reservedRockets, setReservedRockets] = useState([]);
  useEffect(() => {
    setReservedRockets(rockets.filter((rocket) => rocket.reserved));
  }, [rockets]);
  return (
    <div className="row">
      <div className="col">
        <h2>My Missions</h2>
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <td>Telstar</td>
            </tr>
            <tr>
              <td>SES</td>
            </tr>
            <tr>
              <td>AsiaSat</td>
            </tr>
            <tr>
              <td>ABS</td>
            </tr>
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
};
