import "../UsersPanel.css";
import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import { useState } from "react";
import { withRouter } from "react-router";
import { select } from "async";
import config from "../../../../../config.json"

const AddUserDetails = (props) => {
  console.log(props);
  const urlForRoles = config.API_URL + "api/Users/roles";
  const { data: roles, isLoading, error } = useHrmsApi(urlForRoles);
  const [issLoading, setIssLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [firstName, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [adressLine1, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [roleId, setRoleId] = useState("");
  const [roleName, setRoleName] = useState("");

  const handleChange = () => {
    const optionsValue = document.getElementById("optionsValue").value;
    setRoleId(optionsValue);
    setRoleName(`${roles[optionsValue - 1].name}`);
    // console.log(optionsValue);
    // console.log('-----');
    // console.log();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIssLoading(true);

    console.log("roleId wynosi", roleId);
    const user = { firstName, lastName, adressLine1, phoneNumber, roleId };
    console.log(user);
    fetch(config.API_URL + "api/Users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log("added new blog");
        console.log(user);
        console.log(response);
        setIssLoading(false);
        document.querySelector(".userProfileContainer").innerHTML = "";
        setSuccess(true);

        setTimeout(() => {
          props.history.push("/hrms/organization/users");
        }, 3000);
      })
      .catch((err) => {
        if (err.name === "Abort error") {
          console.log("Abortowano");
        } else {
          console.log(err.message);
        }
      });
  };

  return (
    <div>
      {isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div>}
      {error && <div>{error}</div>}
      {success && (
        <div className="success">
        <div onClick={ () => { props.history.push("/hrms/organization/users") } } className="successContent">
          <div>
            <i className="small material-icons">done</i>
          </div>
          <div>DODANO UŻYTKOWNIKA</div>
          <div> </div>
          <div>Powrót do Panelu . . .</div>
        </div>
      </div>
      )}
      {roles && (
        <div className="userProfileContainer">
          <div>
          <div className="userProfileContainerContent">
            TWORZENIE NOWEGO UŻYTKOWNIKA
          </div>
          <form onSubmit={handleSubmit}>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th className="column-narrow2" scope="row">
                    <h1>
                      <i class="bi bi-person-bounding-box"></i>
                    </h1>
                  </th>
                </tr>
                <tr>
                  <th className="column-narrow2" scope="row">
                    <label htmlFor="name">Imię</label>
                  </th>
                  <td>
                    <input
                      className="newUserInput"
                      type="text"
                      id="name"
                      value={firstName}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <th className="column-narrow2" scope="row">
                    <label htmlFor="lastName">Nazwisko</label>
                  </th>
                  <td>
                    <input
                      className="newUserInput"
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <th className="column-narrow2" scope="row">
                    <label htmlFor="adressLine1">Adres</label>
                  </th>
                  <td>
                    <input
                      className="newUserInput"
                      type="text"
                      id="adressLine1"
                      value={adressLine1}
                      onChange={(e) => setAdress(e.target.value)}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <th className="column-narrow2" scope="row">
                    <label htmlFor="phoneNumber">Telefon</label>
                  </th>
                  <td>
                    <input
                      className="newUserInput"
                      type="text"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <th className="column-narrow2" scope="row">
                    Rola
                  </th>
                  <td>
                    <select
                      id="optionsValue"
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      required
                      onChange={handleChange}
                    >
                      {" "}
                      <option disabled selected value="">
                        Wybierz z listy
                      </option>
                      {roles.map((role) => (
                        <option value={role.id}>{role.name}</option>
                      ))}
                    </select>
                    {/* <input hidden='true' className="newUserInput"
                      type="text"
                      id="roleId"
                      
                      onChange={(e) => setRoleId(e.target.value)}
                      >
                          
                      </input> */}
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit" class="btn btn-success">
              <i class="bi bi-person-plus"> </i>
              <span className="addNewUserButtonText"> Dodaj użytkownika </span>
            </button>
          </form>
          </div>
          <div>
          <div className="addUserDataContainer">
            <div className="addUserWarning">SPRAWDŹ POPRAWNOŚĆ DANYCH !</div>
            <div></div>
            <div>Dane nowego użytkownika:</div>
            <div> </div>
            <table className="table-sm table-borderless table-sm-custom">
              <tbody>
                <tr>
                  <td>{<div>{firstName}</div>}</td>
                </tr>
                <tr>
                  <td>{<div>{lastName}</div>}</td>
                </tr>
                <tr>
                  <td>{<div>{adressLine1}</div>}</td>
                </tr>
                <tr>
                  <td>{<div>{phoneNumber}</div>}</td>
                </tr>
                <tr>
                {/* document.getElementById("optionsValue").value */}
                  <td>{<div>{ roleName }</div>}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(AddUserDetails);
