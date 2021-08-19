import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import OrgDetails from "./OrgDetails";

const OrgData = () => {

    const route = 'https://localhost:44325/api/Organization';

    const { data: orgDetails, isLoading, error } = useHrmsApi(route)

    console.log('orgDetails:');
    console.log(typeof(orgDetails));
    console.log(orgDetails);
    return ( 
        <div>
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading data . . .</div> }
            { orgDetails && <OrgDetails details={ orgDetails } /> }
        </div>
     );
}
 
export default OrgData;