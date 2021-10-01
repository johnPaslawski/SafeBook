import './UsersPanel.css'
import UsersPanelContentRouter from "./UsersPanelContentRouter";

const UsersPanel = () => {
  // const { id } = useParams();
  return (
    <div>
      <div className="usersPanel">
        <div className="usersPanelHeader">
          <div>
            <p>Członkowie</p>
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
