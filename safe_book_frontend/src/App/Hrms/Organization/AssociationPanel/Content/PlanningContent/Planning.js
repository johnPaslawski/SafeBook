import useHrmsApi from "../../../HrmsApi/useHrmsApiGet";
import PlanningDetails from "./PlanningDetails";
import config from "../../../../../config.json"


const Planning = () => {
    const route = config.API_URL + 'api/Organization';

    // const { data: orgDetails, isLoading, error } = useHrmsApi(route)
const isLoading = true;
    
    return ( 
        <div>
            {/* { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error}</h6></div> } */}
            { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }
            {/* { orgDetails && <PlanningDetails details={ orgDetails } /> } */}
        </div>
     );
}
 
export default Planning;