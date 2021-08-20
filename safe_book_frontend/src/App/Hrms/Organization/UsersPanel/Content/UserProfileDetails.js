import "../UsersPanel.css";
import { Link } from "react-router-dom";

const UserProfileDetails = ( { user, handleDelete } ) => {
    
    
    
    return ( <div>
        
        <div className="userProfileContainer">
            <div className="userProfileContainerContent">
                PROFIL UŻYTKOWNIKA
            </div>
            <div className="userOptionsFlex">
        <button className="userOptionsButton">
          <i class="bi bi-files"></i> Kopiuj
        </button>
        
        <Link to="/hrms/organization/users/add">
          <button className="userOptionsButton">
            <i class="bi bi-plus-lg"></i> Dodaj
          </button>
        </Link>
        <button onClick={() => { handleDelete(user.id) }} className="userOptionsButtonDelete">
        <i class="bi bi-x-circle-fill"></i> Usuń
        </button>
      </div>
            <table className="table table-borderless table-hover">
                <tbody>
                <tr>
                        <th className="column-narrow2" scope="row"><h1><i class="bi bi-person-bounding-box"></i></h1></th>
                        
                    </tr>
                    <tr>
                        <th className="column-narrow2" scope="row">Imię</th>
                        <td>{user.firstName}</td>
                    </tr>
                    <tr>
                        <th className="column-narrow2" scope="row">Nazwisko</th>
                        <td> {user.lastName}</td>
                    </tr>
                    <tr>
                        <th className="column-narrow2" scope="row">Adres</th>
                        <td>{user.adressLine1} {user.postalCode} {user.city}</td>
                    </tr>
                    <tr>
                        <th className="column-narrow2" scope="row">Telefon</th>
                        <td>{user.phoneNumber}</td>
                    </tr>
                    <tr>
                        <th className="column-narrow2" scope="row">Rola</th>
                        <td>{user.role.name}</td>
                    </tr>
                    
                </tbody>
            </table>
            
        </div>
    </div> );
}
 
export default UserProfileDetails;