import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import StatsDetails from "./StatsDetails";

const Stats = () => {

    const route = 'https://localhost:44325/api/Organization';

    const { data: orgDetails, isLoading, error } = useHrmsApi(route)

    return (
        < div >
            { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error}</h6></div> }
        { isLoading && <div className="loading"><h6><i class="bi bi-arrow-repeat"></i> {"Loading . . ."}</h6></div> }
            { orgDetails && <StatsDetails details={ orgDetails } /> }
        </div>
    );
}

export default Stats;
