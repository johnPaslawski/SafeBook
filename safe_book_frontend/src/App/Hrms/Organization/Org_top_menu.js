import { Link } from "react-router-dom"

const Org_top_menu = () => {
    
    const id = 1; 

    return (
        <div>
            <div className="container_top">
                <div className="container_top_small1">
                    <div className="box1">
                    <Link to="/hrms">
                        <div><i className="bi bi-box-arrow-in-left"></i> Main menu</div>
                    </Link>
                    </div>
                    
                    
                </div>
                <div className="container_top_small2">
                    <div className="box1">
                    <Link to={`/hrms/users/${id}`}>
                    <div><i class="bi bi-person-circle"></i> Jan Pasławski</div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Org_top_menu;