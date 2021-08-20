import { Link } from "react-router-dom";
import "../UsersPanel.css";

const UsersListDetails = ({ usersList }) => {
  var counter = 1;

  return (
    <div>
      <div className="userOptionsFlex">
        <button className="userOptionsButton">
          <i class="bi bi-files"></i> Kopiuj
        </button>
        <button className="userOptionsButton">
          <i class="bi bi-printer"></i> Drukuj
        </button>
        <Link to="/hrms/organization/users/add">
          <button className="userOptionsButton">
            <i class="bi bi-plus-lg"></i> Dodaj
          </button>
        </Link>
      </div>
      <div className="UsersPanel-content">
        <table class="table table-sm">
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
                <Link to={`/hrms/organization/users/${parseInt(user.id)}`}>
                  {" "}
                  <th
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Edycja danych"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </th>
                </Link>
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
      </div>
    </div>
  );
};

export default UsersListDetails;
