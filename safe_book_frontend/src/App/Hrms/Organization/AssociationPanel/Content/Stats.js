import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import StatsDetails from "./StatsDetails";
import config from "../../../../../config.json"

const Stats = () => {

    const route = config.API_URL + 'api/Organization';

    const { data: orgDetails, isLoading, error } = useHrmsApi(route)

    return (
        < div >
            { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error}</h6></div> }
            { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }
            { orgDetails && <StatsDetails details={ orgDetails } /> }
        </div>
    );
}

export default Stats;
