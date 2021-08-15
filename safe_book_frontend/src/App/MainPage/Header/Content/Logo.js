import { Link } from 'react-router-dom'
import './../Header.css'

const Logo = () =>{
    return(
        <Link to="/" className="header-logo-ref">
            <div className="header-logo-back">
                <img className = "header-logo" src={process.env.PUBLIC_URL + '/partyturaLogo.png'} />
            </div>
        </Link>
    );
}

export default Logo;