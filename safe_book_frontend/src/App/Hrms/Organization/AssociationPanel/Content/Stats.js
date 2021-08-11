import useHrmsApi from "../../HrmsApi/useHrmsApi";
import StatsDetails from "./StatsDetails";

const Stats = () => {

    const route = 'https://localhost:44325/api/Organization';

    const { data: orgDetails, isLoading, error } = useHrmsApi(route)

    return (
        < div >
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading data . . .</div> }
            { orgDetails && <StatsDetails details={ orgDetails } /> }
        </div>
    );
}

export default Stats;
