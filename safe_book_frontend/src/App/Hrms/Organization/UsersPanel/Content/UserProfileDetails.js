import "../UsersPanel.css";

const UserProfileDetails = ( { user } ) => {
    return ( <div>
        <div className="userProfileContainer">
            <div className="userProfileContainerContent">
                PROFIL UŻYTKOWNIKA
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