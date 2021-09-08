import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import UsersListDetails from "./UsersListDetails";
import '../UsersPanel.css'

const UsersList = () => {

    const route = 'https://localhost:44325/api/Users'
    
    
    const { data: usersList, isLoading, error} = useHrmsApi(route) 
    
    console.log('usersList:');
    console.log(typeof(usersList));
    console.log(usersList);

    return ( <div>
        <h5>Lista użytkowników</h5>
        <br/>
        { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error}</h6></div> }
        { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }
        { usersList && <UsersListDetails usersList={ usersList } /> }
    </div> );
}
 
export default UsersList;