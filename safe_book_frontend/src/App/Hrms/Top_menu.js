import { Link } from "react-router-dom"

const Top_menu = () => {
    
    const id = 1; 

    return (
        <div>
            <div className="container_top">
                <div className="container_top_small1">
                    <div className="box1">
                    <Link to="/hrms">
                        <div><i className="bi bi-box-arrow-in-left"></i> Menu główne </div>
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

export default Top_menu;