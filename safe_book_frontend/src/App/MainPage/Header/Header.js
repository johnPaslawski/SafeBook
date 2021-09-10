import React from 'react';
import header from './Header.module.css'
import grid from './../css/GridSystem.module.css'
import { NavLink } from 'react-router-dom';
import Logo from './Content/Logo';

class Header extends React.Component{

    openCloseSerchPanel = () => {
        const searchPanel = document.querySelector(`.${header.serchPanel}`);
        switch (searchPanel.style.display){
            case "grid":
                searchPanel.style.display = "none";
                this.props.onChangeSearchBody("");
                break;
            default:
                searchPanel.style.display = "grid";
        }
    }

    changeSearchBody = (e) => {
        const value = e.target.value;
        value[value.length - 1] != " " && this.props.onChangeSearchBody(e.target.value);
    }

    onSearchClick = () => {
        this.props.setNewSearch(true);
    }
    render(){
        return(
            <div className={`${header.header} ${grid.grid} ${grid.colNine}`}>
                <div className={header.mainBtn}>
                    <NavLink to="/main/about" activeClassName={header.active}>O nas</NavLink>
                </div>
                <div className={header.mainBtn}>
                    <NavLink to="/main/projects" activeClassName={header.active}>Projekty</NavLink>
                </div>
                <div className={header.mainBtn}>
                    <NavLink to="/main/offer" activeClassName={header.active}>Oferta</NavLink>
                </div>
                <div className={header.mainBtn}>
                    <NavLink to="/main/contact" activeClassName={header.active}>Kontakt</NavLink>
                </div>
                <div className={`${header.mainBtn} ${header.logoBlock} ${grid.grid}`}>
                    <Logo />
                </div>
                <div className={header.mainBtn}>
                    <NavLink to="/shop" activeClassName={header.active}>Sklep</NavLink>
                </div>
                <div className={header.mainBtn}>
                    <NavLink to="/hrms" activeClassName={header.active}>HRMS</NavLink>
                </div>
                <div className={`${grid.grid} ${grid.colOne} ${header.search}`}>
                    <div className={`${grid.grid} ${header.searchIconBlock}`}>
                        <img onClick={this.openCloseSerchPanel} src={process.env.PUBLIC_URL + '/SearchStart.png'} alt=""/>
                        <div className={`${header.serchPanel} ${grid.colTwoA}`}>
                            <input type="textBox" placeholder="Wpisz" onChange={this.changeSearchBody}></input>
                            {/* <button className={`${header.searchBtn}`} onClick={this.onSearchClick}>Wyszukaj</button> */}
                        </div>
                    </div>
                </div>
                <div className={`${grid.grid} ${grid.colTwo} ${header.secondBtn}`}>
                    <NavLink to="/login" className={`${grid.grid}`} activeClassName={`${header.active}`}>
                        <img alt=""  src={process.env.PUBLIC_URL + '/LoginStart.png'}/>
                    </NavLink>
                    <NavLink to="/register" className={`${grid.grid}`} activeClassName={`${header.active}`}>
                        <img alt="" src={process.env.PUBLIC_URL + '/RegisterStart.png'}/>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Header;