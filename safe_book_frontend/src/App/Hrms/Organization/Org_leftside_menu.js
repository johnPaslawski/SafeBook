import "../Hrms"
import { Link } from "react-router-dom";

const Org_leftside_menu = () => {
  return (

    <div>
      <div className="container_left">
        <div className="serviceMenuTitle">
          ORGANIZATION SERVICE
          <h2><i class="bi bi-diagram-3"></i></h2>
        </div>
        <Link to="/hrms/organization/association">
        <div className="box2">
          <div className="box3"><i class="bi bi-people-fill"></i></div>
          
          <div className="box3">Association</div>
          
        </div>
        </Link>
        <Link to="/hrms/organization/users"> 
        <div className="box2">
        <div className="box3"><i class="bi bi-person-lines-fill"></i></div>
           
            <div className="box3">Users</div>
          
        </div>
        </Link>
        <Link to="/hrms/organization/documents">
        <div className="box2">
          <div className="box3"><i class="bi bi-file-earmark-ruled-fill"></i></div>
          
          <div className="box3">Documents</div>
          
        </div>
        </Link>
        <Link to="/hrms/organization/actions">
        <div className="box2">
          <div className="box3"><i class="bi bi-arrow-down-right-square-fill"></i></div>
          <div className="box3">Actions</div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Org_leftside_menu;