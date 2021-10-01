import { useApi as useHrmsApi } from "../../../../Api/Api.js";
import EditUserDetails from "./EditUserDetails";
import { useParams } from "react-router";
import config from '../../../../../config.json';


const EditUser = () => {

    const { id } = useParams();

    const route = `${config.API_URL}/Users/` + id;
    const urlForRoles = `${config.API_URL}/Users/roles`;

    const { data: user, isLoading, error} = useHrmsApi(route);
    const { data: roles, isLoadingRoles, errorRoles } = useHrmsApi(urlForRoles);

    return ( <div>
        
        { isLoading || isLoadingRoles && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }
        { error || errorRoles && <div>{ error }<br/>{ errorRoles }</div> }
        { user && roles && <EditUserDetails user={ user } roles={ roles }/> }
        
    </div> );
}
 
export default EditUser;