import { Link } from "react-router-dom";
import { useState } from "react";
import "../UsersPanel.css";

const UsersListDetails = ({ usersList }) => {
  
  var counter = 1;

  return (
    <div>
      
      <div className="UsersPanel-content">
      { usersList?.length == 0 ? <div className="notFound">BRAK WYNIKÓW</div> : (<table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Przejdź:</th>
              <th scope="col">Nr</th>
              <th scope="col">Imię <i class="bi bi-caret-down-fill"></i><i class="bi bi-caret-up-fill"></i></th>
              <th scope="col">Nazwisko <i class="bi bi-caret-down-fill"></i> <i class="bi bi-caret-up-fill"></i></th>
              <th scope="col">Email </th>
              <th scope="col">Adres </th>
              <th scope="col">Kod pocztowy</th>
              <th scope="col">Miasto <i class="bi bi-caret-down-fill"></i> <i class="bi bi-caret-up-fill"></i></th>
              <th scope="col">Telefon</th>
              <th scope="col">Rola <i class="bi bi-caret-down-fill"></i> <i class="bi bi-caret-up-fill"></i></th>
            </tr>
          </thead>
          <tbody>
            
            { usersList.map((user) => (
              <tr key={user.id}>
                  <td
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Szczegółowe dane użytkownika" className="text-center"
                  >
                    <Link to={`/hrms/organization/users/${parseInt(user.id)}`}>
                    <div className="editIcon"> <i class="bi bi-pencil-square"></i></div>
                    </Link>
                  </td>
                
                <th>{counter++}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.adressLine1}</td>
                <td>{user.postalCode}</td>
                <td>{user.city}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.role.name}</td>
              </tr>
            ))}
          </tbody>
        </table>)}
        
      </div>
    </div>
  );
};

export default UsersListDetails;
