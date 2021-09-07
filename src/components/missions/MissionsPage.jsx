/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import PropTypes from 'prop-types';
import Mission from './mission/mission';

const missionsPage = (props) => {
  const { missions } = props;
  return (
    <table className="table caption-top table-bordered table-striped">
      <thead>
        <tr>
          <th className="col-1"><strong>Mission</strong></th>
          <th className="col-8"><strong>Description</strong></th>
          <th className="col-1"><strong>Status</strong></th>
          <th className="col-2"> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission mission={mission} key={mission.id} />
        ))}
      </tbody>
    </table>
  );
};
export default missionsPage;

missionsPage.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};
