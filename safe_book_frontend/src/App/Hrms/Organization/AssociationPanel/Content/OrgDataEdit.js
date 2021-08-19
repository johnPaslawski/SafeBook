import OrgDataEditDetails from "./OrgDataEditDetails";
import useHrmsApi from "../../HrmsApi/useHrmsApiGet";

const OrgDataEdit = () => {

    const route = 'https://localhost:44325/api/Organization';

    const { data: orgDetails, isLoading, error } = useHrmsApi(route)


    return ( 
        <div>
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading data . . .</div> }
            { orgDetails && <OrgDataEditDetails details={ orgDetails } /> }
        </div>
     );
}
 
export default OrgDataEdit;