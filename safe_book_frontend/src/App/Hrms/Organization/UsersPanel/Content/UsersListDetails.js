import { Link } from "react-router-dom";
import '../UsersPanel.css'

const UsersListDetails = ({ usersList }) => {

    var counter = 1;

    return (<div>

        <table class="table table-sm table-hover">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Nr</th>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Adres</th>
                    <th scope="col">Kod pocztowy</th>
                    <th scope="col">Miasto</th>
                    <th scope="col">Telefonu</th>
                    <th scope="col">Rola</th>
                </tr>
            </thead>
            <tbody>
                {usersList.map((user) => (
                    <tr key={user.id}>
                        <th><Link to={`/hrms/organization/users/${user.id}`}><i class="bi bi-pencil-square"></i></Link></th>
                        <th>{counter++}</th>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.adressLine1}</td>
                        <td>{user.postalCode}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.city}</td>
                        <td>{user.role.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>);
}

export default UsersListDetails;