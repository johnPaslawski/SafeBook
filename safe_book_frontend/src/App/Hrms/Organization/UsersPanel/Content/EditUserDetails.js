import { useState } from "react";
import { withRouter } from "react-router";
import { axiosClient } from "../../../../Api/Api";
import config from '../../../../../config.json';
import axios from "axios";

const EditUserDetails = (props) => {
    const [success, setSuccess] = useState(false);

    const [firstName, setName] = useState(props.user.firstName);
    const [secondName, setSecondName] = useState(props.user.secondName);
    const [lastName, setLastName] = useState(props.user.lastName);
    const [email, setEmail] = useState(props.user.email);
    const [adressLine1, setAddress1] = useState(props.user.adressLine1);
    const [adressLine2, setAddress2] = useState(props.user.adressLine2);
    const [city, setCity] = useState(props.user.city);
    const [postalCode, setPostalCode] = useState(props.user.postalCode);
    const [country, setCountry] = useState(props.user.country);
    const [phoneNumber, setPhoneNumber] = useState(props.user.phoneNumber);
    const [phoneNumber2, setPhoneNumber2] = useState(props.user.phoneNumber2);
    const [roleName, setRoleName] = useState(props.user.role.name);
    const [roleId, setRoleId] = useState(props.user.role.id);

    const handleChange = () => {
        const optionsValue = document.getElementById("optionsValue").value;
        setRoleId(optionsValue);
        setRoleName(`${props.roles.find(role => role.id === optionsValue).name}`);
        
    };
    const lack = "";
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');

        const user = { firstName, secondName, lastName, email, adressLine1, adressLine2, city, postalCode, country, phoneNumber, phoneNumber2, roleId };
        axios.put(`${config.API_URL}/Users/${props.user.id}`, user)
        .then(() => {
            setSuccess(true);
            setTimeout(() => {
                props.history.push("/hrms/organization/users");
              }, 2000);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }

    return (<div>
        { success && (
        <div className="success">
        <div onClick={ () => { props.history.push("/hrms/organization/users") } } className="successContent">
          <div>
            <i className="small material-icons">done</i>
          </div>
          <div>UAKTUALNIONO DANE</div>
          <div> </div>
          <div>Powrót do Panelu . . .</div>
        </div>
      </div>
      )}
        { !success && (
            <div className="userProfileContainer">

            <div>
                <div className="userProfileContainerContent">
                    EDYCJA DANYCH UŻYTKOWNIKA
                </div>
                <div className="saveOrCancelContainer"><button className="btn btn-success btn-sm" type="submit" form="editUser">
                    Zapisz
                </button>
                    <button onClick={() => { props.history.push(`/hrms/organization/users/${props.user.id}`) }} className="btn btn-danger btn-sm">
                        Anuluj
                    </button></div>
            
                <form id="editUser" onSubmit={handleSubmit}>
                    <table className="table table-borderless table-sm">
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
                                        onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </td>
                            </tr>
                            <tr>
                                <th className="column-narrow2" scope="row">
                                    <label htmlFor="lastName">Drugie imię</label>
                                </th>
                                <td>
                                    <input
                                        className="newUserInput"
                                        type="text"
                                        id="lastName"
                                        value={secondName}
                                        onChange={(e) => setSecondName(e.target.value)}
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
                                        onChange={(e) => setLastName(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="column-narrow2" scope="row">
                                    <label htmlFor="adressLine1">Email</label>
                                </th>
                                <td>
                                    <input
                                        className="newUserInput"
                                        type="text"
                                        id="adressLine1"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="column-narrow2" scope="row">
                                    <label htmlFor="adressLine1">Adres 1</label>
                                </th>
                                <td>
                                    <input
                                        className="newUserInput"
                                        type="text"
                                        id="adressLine1"
                                        value={adressLine1}
                                        onChange={(e) => setAddress1(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="column-narrow2" scope="row">
                                    <label htmlFor="adressLine1">Adres 2</label>
                                </th>
                                <td>
                                    <input
                                        className="newUserInput"
                                        type="text"
                                        id="adressLine1"
                                        value={adressLine2}
                                        onChange={(e) => setAddress2(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="column-narrow2" scope="row">
                                    <label htmlFor="adressLine1">Miejscowość</label>
                                </th>
                                <td>
                                    <input
                                        className="newUserInput"
                                        type="text"
                                        id="adressLine1"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="column-narrow2" scope="row">
                                    <label htmlFor="adressLine1">Kod pocztowy</label>
                                </th>
                                <td>
                                    <input
                                        className="newUserInput"
                                        type="text"
                                        id="adressLine1"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="column-narrow2" scope="row">
                                    <label htmlFor="adressLine1">Państwo</label>
                                </th>
                                <td>
                                    <input
                                        className="newUserInput"
                                        type="text"
                                        id="adressLine1"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <th className="column-narrow2" scope="row">
                                    <label htmlFor="phoneNumber">Numer telefonu 1</label>
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
                                    <label htmlFor="phoneNumber">Numer telefonu 2</label>
                                </th>
                                <td>
                                    <input
                                        className="newUserInput"
                                        type="text"
                                        id="phoneNumber"
                                        value={phoneNumber2}
                                        onChange={(e) => setPhoneNumber2(e.target.value)}
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
                                        {/* <option disabled selected value="">
                                            Wybierz z listy
                                        </option> */}
                                        {props.roles.map((role) => (
                                            <option value={role.id} selected={roleId == role.id ? true : false}>{role.name}</option>
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
            
            
                </form>
            
            </div>
            
            <div>
            
                <div className="addUserDataContainer">
            
                    <div className="addUserWarning">SPRAWDŹ POPRAWNOŚĆ DANYCH !</div>
                    <div></div>
                    <div>Dane użytkownika:</div>
                    <table className="table-sm table-borderless table-sm-custom">
                        <tbody>
                            <tr>
                                <td>{<div>{firstName}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{secondName}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{lastName}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{email}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{adressLine1}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{adressLine2}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{postalCode}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{city}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{country}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{phoneNumber}</div>}</td>
                            </tr>
                            <tr>
                                <td>{<div>{phoneNumber2}</div>}</td>
                            </tr>
                            <tr>
                                {/* document.getElementById("optionsValue").value */}
                                <td>{<div>{roleName}</div>}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        ) }
    </div>
    );
}

export default withRouter(EditUserDetails);