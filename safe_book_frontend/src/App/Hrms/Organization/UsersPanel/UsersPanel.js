import { useParams } from "react-router";
import './UsersPanel.css'
import { Link } from "react-router-dom";
import UsersPanelContentRouter from "./UsersPanelContentRouter";

const UsersPanel = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="usersPanel">
        <div className="usersPanelHeader">
          <div>
            <p>Użytkownicy</p>
          </div>
        </div>
        <div className="UsersPanel-contentRouter">
          <UsersPanelContentRouter />
        </div>
      </div>

    </div>
  );
}

export default UsersPanel;
