import React from 'react';
import header from './Header.module.css'
import grid from './../css/GridSystem.module.css'
import { NavLink } from 'react-router-dom';
import Logo from './Content/Logo';
import {useAuth, userManagerInstance} from '../../../Auth/AuthContext.js';

class Header extends React.Component{

    openCloseSerchPanel = () => {
        const searchPanel = document.querySelector(`.${header.serchPanel}`);
        switch (searchPanel.style.display){
            case "grid":
                searchPanel.style.display = "none";
                this.props.setSearchBody("");
                break;
            default:
                searchPanel.style.display = "grid";
        }
    }

    changeDeep = (e) => {
        let target = e.target;

        let deep = null;
        if (target.classList.contains(header.sector)){
            deep = target.querySelector(`.${header.deep}`);
        }
        else if(target.classList.contains(header.pressForDeeo)){
            deep = target.parentElement.parentElement.querySelector(`.${header.deep}`);
        }
        else if(target.classList.contains(header.mainBtn) && target.parentElement.classList.contains(header.deepElem)){
            let curElem = target;
            while(!curElem.classList.contains(header.deep)){
                curElem = curElem.parentElement;
            }
            curElem.style.display = "";
            return;
        }
        
        if (deep){
            if(deep.style.display === ""){
                deep.style.display = "grid";
                deep.style.opacity = 1;
            }
            else{
                deep.style.opacity = 0;
                deep.style.display = "";
            }
        }
    }

    changeSearchBody = (e) => {
        const value = e.target.value;
        value[value.length - 1] !== " " && this.props.setSearchBody(e.target.value);
    }

    onSearchClick = () => { this.props.setNewSearch(true) }

    render(){
        return(
            <div className={`${header.header} ${grid.grid} ${grid.colNine}`}>
                <div className={header.sector} onClick={this.changeDeep}>
                    <div className={header.mainBtnElem}>
                        <div className={`${header.mainBtn} ${header.pressForDeeo}`}>O nas</div>
                    </div>
                    <div className={header.deep}>
                        <div className={header.deepElem}>
                            <NavLink to="/main/about" className={header.mainBtn}>Opis</NavLink>
                        </div>
                        <div className={header.deepElem}>
                            <NavLink to="/main/media" className={header.mainBtn}>Media</NavLink>
                        </div>
                    </div>
                </div>
                <div className={header.mainBtnElem}>
                    <NavLink to="/main/projects" className={header.mainBtn} activeClassName={header.active}>Projekty</NavLink>
                </div>
                <div className={header.mainBtnElem}>
                    <NavLink to="/main/offer" className={header.mainBtn} activeClassName={header.active}>Oferta</NavLink>
                </div>
                <div className={header.mainBtnElem}>
                    <NavLink to="/main/contact" className={header.mainBtn} activeClassName={header.active}>Kontakt</NavLink>
                </div>
                <div className={`${header.mainBtnElem} ${header.logoBlock} ${grid.grid}`}>
                    <Logo />
                </div>
                <div className={header.mainBtnElem}>
                    <NavLink to="/shop" className={header.mainBtn} activeClassName={header.active}>Sklep</NavLink>
                </div>
                <div className={header.mainBtnElem}>
                    <NavLink to="/hrms" className={header.mainBtn} activeClassName={header.active}>HRMS</NavLink>
                </div>
                <div className={`${grid.grid} ${grid.colOne} ${header.search}`}>
                    <div className={`${grid.grid} ${header.searchIconBlock}`}>
                        <img onClick={this.openCloseSerchPanel} src={process.env.PUBLIC_URL + '/SearchStart.png'} alt=""/>
                        <div className={`${header.serchPanel} ${grid.colTwoA}`}>
                            <input type="textBox" placeholder="Wpisz" onChange={this.changeSearchBody}></input>
                        </div>
                    </div>
                </div>
                <div className={`${grid.grid} ${grid.colTwo} ${header.secondBtn}`}>
                    {/* <NavLink to="/login" className={`${grid.grid}`} activeClassName={`${header.active}`}>
                        <img alt=""  src={process.env.PUBLIC_URL + '/LoginStart.png'}/>
                    </NavLink> */}
                    <a activeClassName={`${header.active}`} className={`${grid.grid}`} onClick={ () => userManagerInstance.signinRedirect()}>
                        <img alt=""  src={process.env.PUBLIC_URL + '/LoginStart.png'}/>
                    </a>
                    {/* <NavLink to="/register" className={`${grid.grid}`} activeClassName={`${header.active}`}>
                        <img alt="" src={process.env.PUBLIC_URL + '/RegisterStart.png'}/>
                    </NavLink> */}
                    <a activeClassName={`${header.active}`} className={`${grid.grid}`} onClick={ () => userManagerInstance.signoutRedirect()}>
                        <img alt=""  src={process.env.PUBLIC_URL + '/RegisterStart.png'}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;