import header from './../Header.module.css';
import grid from './../../css/GridSystem.module.css'
import { NavLink } from 'react-router-dom';

const Logo = () => {

    return(
        <div className={`${header.logo}`}>
            <NavLink to="/main" activeClassName={header.activeLogo} className={`${grid.grid}`}>
                <img alt="" className={header.logoImg} src={process.env.PUBLIC_URL + '/partyturaLogo.png'}/>
            </NavLink>
        </div>
    );
}

export default Logo;