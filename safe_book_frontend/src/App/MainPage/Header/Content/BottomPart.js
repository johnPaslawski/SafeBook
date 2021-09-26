import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from '../../../../Auth/AuthContext';
import useUser from '../../../../Auth/useUser';
import './../Header.css';

const BottomPart = (props) => {

    const [searchValue, SetSearchValue] = useState("");
    const ChangeSearchValue = (event) =>{
        SetSearchValue(event.target.value);
    }

    const auth = useAuth();
    const user = useUser();

    return(
        <div className="heder-bottom">
            {!user && <button onClick={() => auth.signinRedirect()}>sign in</button>}
            {user && <button onClick={() => auth.signoutRedirect()}>sign out</button>}
            <Link to="/main/about" style={{gridArea: "about-btn"}}>O Nas</Link>
            <Link to="/main/projects" style={{gridArea: "projects-btn"}}>Projekty</Link>
            <Link to="/main/offer" style={{gridArea: "offer-btn"}}>Oferta</Link>
            <Link to="/main/contact" style={{gridArea: "contacts-btn"}}>Kontakt</Link>
            <Link to="/shop" style={{gridArea: "shop-btn"}}>Sklep</Link>
            <div className="search">
                <input className="search-input" onChange={ ChangeSearchValue }type="textbox" placeholder="Search" id="header-search"></input>
                <a onClick={ () => {props.SetLookingValue(searchValue)}} className="search-btn">Wyszukaj</a>
            </div>
        </div>
    );
}

export default BottomPart;