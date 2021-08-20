import "../Hrms"
import { Link, NavLink } from "react-router-dom";

const Org_leftside_menu = () => {
  return (

    <div>
      <div className="container_left">
        <div className="serviceMenuTitle">
          ORGANIZACJA
          <h2><i class="bi bi-diagram-3"></i></h2>
        </div>
        <NavLink to="/hrms/organization/association">
        <div className="box2">
          <div className="box3"><i class="bi bi-people-fill"></i></div>
          
          <div className="box3">Stowarzyszenie</div>
          
        </div>
        </NavLink>
        <NavLink to="/hrms/organization/users"> 
        <div className="box2">
        <div className="box3"><i class="bi bi-person-lines-fill"></i></div>
           
            <div className="box3">Członkowie</div>
          
        </div>
        </NavLink>
        <NavLink to="/hrms/organization/documents">
        <div className="box2">
          <div className="box3"><i class="bi bi-file-earmark-ruled-fill"></i></div>
          
          <div className="box3">Dokumenty</div>
          
        </div>
        </NavLink>
        <NavLink to="/hrms/organization/actions">
        <div className="box2">
          <div className="box3"><i class="bi bi-arrow-down-right-square-fill"></i></div>
          <div className="box3">Działania</div>
        </div>
        </NavLink>
        {/* <div className="hrms_footer">
          <div>
            Human Resource Managment System
          </div>
          
          <div>
          v.1.0
          </div>
          <div>
          Copyright © 2021 C# Ninjas.
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Org_leftside_menu;