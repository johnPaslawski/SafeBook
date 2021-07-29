import { Link } from 'react-router-dom';
import './../Header.css';

const BottomPart = () => {
    return(
        <div className="heder-bottom">
            <Link to="/about" style={{gridArea: "about-btn"}}>O Nas</Link>
            <Link to="/projects" style={{gridArea: "projects-btn"}}>Projekty</Link>
            <Link to="/offer" style={{gridArea: "offer-btn"}}>Oferta</Link>
            <Link to="/contact" style={{gridArea: "contacts-btn"}}>Kontakt</Link>
            <Link to="*" style={{gridArea: "shop-btn"}}>Sklep</Link>
            <div className="search">
                <label htmlFor="header-search" className="header-search-label">Wyszukaj</label>
                <input className="search-input" type="textbox" placeholder="Search" id="header-search"></input>
            </div>
        </div>
    );
}

export default BottomPart;