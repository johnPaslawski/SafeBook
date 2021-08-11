import '../UsersPanel.css'
import UserProfileDetails from './UserProfileDetails'
import useHrmsApi from '../../HrmsApi/useHrmsApi'
import { useParams } from 'react-router'

const UserProfile = ( ) => {

    const { id } = useParams();
    const route = 'https://localhost:44325/api/Users/' + id;
    const { data: user, isLoading, error} = useHrmsApi(route)

    return (<div>

        { error && <div>{error}</div> }
        { isLoading && <div>Loading . . .</div> }
        { user && <UserProfileDetails user={ user } /> }
        

    </div>);
}

export default UserProfile;

{/* <th scope="col"></th>
<th scope="col">Nr</th>
<th scope="col">Imię</th>
<th scope="col">Nazwisko</th>
<th scope="col">Adres</th>
<th scope="col">Kod pocztowy</th>
<th scope="col">Miasto</th>
<th scope="col">Telefonu</th>
<th scope="col">Rola</th> */}