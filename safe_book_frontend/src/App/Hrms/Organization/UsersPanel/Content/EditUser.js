import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import EditUserDetails from "./EditUserDetails";
import { useParams } from "react-router";


const EditUser = () => {

    const { id } = useParams();

    const route = 'https://localhost:44325/api/Users/' + id;
    const urlForRoles = "https://localhost:44325/api/Users/roles";

    const { data: user, isLoading, error} = useHrmsApi(route);
    const { data: roles, isLoadingRoles, errorRoles } = useHrmsApi(urlForRoles);

    return ( <div>
        
        { isLoading || isLoadingRoles && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }
        { error || errorRoles && <div>{ error }<br/>{ errorRoles }</div> }
        { user && roles && <EditUserDetails user={ user } roles={ roles }/> }
        
    </div> );
}
 
export default EditUser;