import '../UsersPanel.css'
import UserProfileDetails from './UserProfileDetails'
import useHrmsApi from '../../HrmsApi/useHrmsApiGet'
import { useParams } from 'react-router'
import { withRouter } from "react-router";

const UserProfile = (props) => {

    const { id } = useParams();
    const route = 'https://localhost:44325/api/Users/' + id;
    const { data: user, isLoading, error} = useHrmsApi(route)

    const handleDelete = (id) => {
        console.log(id)
        alert("Usunięto użytkownika !");
        fetch(`https://localhost:44325/api/Users/${id}`, {
      method: "DELETE"
      
    })
      .then((response) => {
        console.log("deleted user");
        console.log(user);
        console.log(response);
        
        setTimeout(() => {
          props.history.push("/hrms/organization/users");
        }, 500);
      })
      .catch((err) => {
        if (err.name === "Abort error") {
          console.log("Abortowano");
        } else {
          console.log(err.message);
        }
      });
    } 

    return (<div>

        { error && <div>{error}</div> }
        { isLoading && <div>Loading . . .</div> }
        { user && <UserProfileDetails user={ user } handleDelete={ handleDelete } /> }
        

    </div>);
}

export default withRouter(UserProfile);

{/* <th scope="col"></th>
<th scope="col">Nr</th>
<th scope="col">Imię</th>
<th scope="col">Nazwisko</th>
<th scope="col">Adres</th>
<th scope="col">Kod pocztowy</th>
<th scope="col">Miasto</th>
<th scope="col">Telefonu</th>
<th scope="col">Rola</th> */}