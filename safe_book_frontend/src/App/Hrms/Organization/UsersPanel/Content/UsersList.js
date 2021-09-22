import { useGet as useHrmsApi} from "../../../../Api/Api";
import UsersListDetails from "./UsersListDetails";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../UsersPanel.css'
import config from "../../../../../config.json"

const UsersList = ( props ) => {

    var route = config.API_URL + '/Users?like=' + props.searchValue;
    const { data: usersList, isLoading, error} = useHrmsApi(route) 
    

    return ( <div>
        <h5>Lista użytkowników</h5>
        <br/>
        <div className="userOptionsFlex">
        <button className="userOptionsButton">
          <i class="bi bi-files"></i> Kopiuj
        </button>
        <button className="userOptionsButton">
          <i class="bi bi-printer"></i> Drukuj
        </button>
        <Link to="/hrms/organization/users/add">
          <button className="userOptionsButton">
            <i class="bi bi-plus-lg"></i> Dodaj użytkownika
          </button>
        </Link>
        <div>
                <input onChange={ props.HandleChange } type="textbox" placeholder="Wyszukaj" id="header-search"></input>
                {/* <Link onClick={ () => {setSearchValue(searchValue2)} }> <i class="bi bi-search"></i>sdsd</Link>  */}
            </div>
      </div>

        { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error}</h6></div> }
        { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }
        { usersList && <UsersListDetails usersList={ usersList }/> }
        
    </div> );
}
export default UsersList;