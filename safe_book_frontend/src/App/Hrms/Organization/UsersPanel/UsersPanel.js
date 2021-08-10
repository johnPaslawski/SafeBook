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
