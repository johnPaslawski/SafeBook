import { useParams } from "react-router";
import './UsersPanel.css'

const UsersPanel = () => {
  const { id } = useParams();
  return ( 
  <div>
    <div className="usersPanel">
    <h1>UsersPanel</h1>
    </div>

  </div> 
  );
}
 
export default UsersPanel;
{/* <table class="table table-borderless table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}