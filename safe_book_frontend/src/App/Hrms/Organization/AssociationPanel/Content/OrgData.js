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
            { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error}</h6></div> }
            { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }
            { orgDetails && <OrgDetails details={ orgDetails } /> }
        </div>
     );
}
 
export default OrgData;