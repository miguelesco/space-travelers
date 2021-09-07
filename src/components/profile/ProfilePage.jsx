/* eslint-disable linebreak-style */
const profilePage = () => (
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
          <tr>
            <td>Falcon 9</td>
          </tr>
          <tr>
            <td>Falcon Heavy</td>
          </tr>
          <tr>
            <td>Starship</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default profilePage;
