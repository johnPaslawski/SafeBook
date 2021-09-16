import "../UsersPanel.css";
import { Link } from "react-router-dom";

const UserProfileDetails = ({ user, handleDelete }) => {

  const lack = <div className="Brak">-brak-</div>;

  const HandleClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("Imię:" + user.firstName + "\n" + "Nazwisko:" + user.lastName + "\n" + "Rola:" + user.role.name + "\n" +
      "Email:" + user.email + "\n" + "Telefon:" + user.phoneNumber)
      const copyButton = document.querySelector("#copyButton");
      console.log(copyButton);

      copyButton.className = 'copied';
      copyButton.innerHTML = '<i class="bi bi-check-lg"></i> Skopiowano';
      
      setTimeout(()=>{
        copyButton.className = 'userOptionsButton';
        copyButton.innerHTML = '<i class="bi bi-files"></i> Kopiuj';
      }, 2000);
      
  }

  return (
    <div>
      <div className="userProfileContainer2">
        <div className="userProfileContainerContent">PROFIL UŻYTKOWNIKA</div>
        <div className="userOptionsFlex">
          <button onClick={HandleClick} className="userOptionsButton" id="copyButton">
            <i className="bi bi-files"></i> Kopiuj
          </button>

          <Link to={`/hrms/organization/users/${ user.id }/edit`}>
            <button className="userOptionsButton">
              <i className="bi bi-pencil-square"></i> Edytuj dane
            </button>
          </Link>
          <button onClick={() => { handleDelete(user.id); }} className="userOptionsButtonDelete">
            <i className="bi bi-x-circle-fill"></i> Usuń
          </button>
        </div>
        <div className="userDetailsContainer">
          <div className="userPhoto"><h1>
            <i className="bi bi-person-bounding-box"></i>
          </h1>
          </div>
          <div className="userDetailsContainerDetails">

            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Imię:</div> <div className="userDetailsRowValue">{user.firstName ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Drugie Imię:</div> <div className="userDetailsRowValue">{user.secondName ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Nazwisko:</div> <div className="userDetailsRowValue">{user.lastName ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Email:</div> <div className="userDetailsRowValue">{user.email ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Adres 1:</div> <div className="userDetailsRowValue">{user.adressLine1 ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Adres 2:</div> <div className="userDetailsRowValue">{user.adressLine2 ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Miasto:</div> <div className="userDetailsRowValue">{user.city ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Kod pocztowy:</div> <div className="userDetailsRowValue">{user.postalCode ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Państwo:</div> <div className="userDetailsRowValue">{user.country ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Numer telefonu 1:</div> <div className="userDetailsRowValue">{user.phoneNumber ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Numer telefonu 2:</div> <div className="userDetailsRowValue">{user.phoneNumber2 ?? lack}</div>
            </div>
            <div className="userDetailsRow">
              <div className="userDetailsRowTitle">Rola:</div> <div className="userDetailsRowValue">{user.role.name ?? lack}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetails;
