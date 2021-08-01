import { Link } from 'react-router-dom'
import './../Header.css'

const Logo = () =>{
    return(
        <Link to="/" className="header-logo-ref">
            <img className = "header-logo" src={process.env.PUBLIC_URL + 'partyturaLogo.png'} />
        </Link>
    );
}

export default Logo;