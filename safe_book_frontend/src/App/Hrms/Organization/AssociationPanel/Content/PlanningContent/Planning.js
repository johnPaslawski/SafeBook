import useHrmsApi from "../../../HrmsApi/useHrmsApiGet";
import PlanningDetails from "./PlanningDetails";


const Planning = () => {
    const route = 'https://localhost:44325/api/Organization';

    // const { data: orgDetails, isLoading, error } = useHrmsApi(route)
const isLoading = true;
    
    return ( 
        <div>
            {/* { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error}</h6></div> } */}
            { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div className="">Ładuję dane . . .</div></div> }
            {/* { orgDetails && <PlanningDetails details={ orgDetails } /> } */}
        </div>
     );
}
 
export default Planning;