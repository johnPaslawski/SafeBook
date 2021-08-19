import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import UsersListDetails from "./UsersListDetails";


const UsersList = () => {

    const route = 'https://localhost:44325/api/Users'
    
    
    const { data: usersList, isLoading, error} = useHrmsApi(route) 
    
    console.log('usersList:');
    console.log(typeof(usersList));
    console.log(usersList);

    return ( <div>
        <h5>Lista użytkowników</h5>
        <br/>
        { error && <div>{error}</div> }
        { isLoading && <div>Loading . . .</div> }
        { usersList && <UsersListDetails usersList={ usersList } /> }
    </div> );
}
 
export default UsersList;