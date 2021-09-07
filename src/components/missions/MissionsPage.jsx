/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Mission from './mission/mission';
import { fetchMissions } from '../../redux/missions/missions.actions';

const missionsPage = () => {
  const { missionsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsReducer.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);
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
        {missionsReducer.map((mission) => (
          <Mission mission={mission} key={mission.id} />
        ))}
      </tbody>
    </table>
  );
};
export default missionsPage;
