import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import UsersListDetails from "./UsersListDetails";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../UsersPanel.css'

const UsersList = ( props ) => {

    var route = 'https://localhost:44325/api/Users?like=' + props.searchValue;

    const { data: usersList, isLoading, error} = useHrmsApi(route) 
    
    const HandleClick = (e) => {
      e.preventDefault();
      const usersListCopied = {
        // UZUPEŁNIĆ
      }
      navigator.clipboard.writeText(JSON.stringify(usersList));
        const copyButton = document.querySelector("#copyButton");
  
        copyButton.className = 'copied';
        copyButton.innerHTML = '<i class="bi bi-check-lg"></i> Skopiowano';
        
        setTimeout(()=>{
          copyButton.className = 'optionsButton';
          copyButton.innerHTML = '<i class="bi bi-files"></i> Kopiuj';
        }, 2000);
        
    }

    return ( <div>
        <h5>Lista użytkowników</h5>
        <br/>
        <div className="userOptionsFlex">
        <button onClick={ HandleClick } id="copyButton" className="userOptionsButton">
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

        { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error }</h6></div> }
        { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }
        { usersList && <UsersListDetails usersList={ usersList }/> }
        
    </div> );
}
export default UsersList;