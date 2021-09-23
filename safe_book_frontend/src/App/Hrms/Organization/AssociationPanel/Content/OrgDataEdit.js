import OrgDataEditDetails from "./OrgDataEditDetails";
import { useApi as useHrmsApi} from "../../../../Api/Api";
import "../AssociationPanel.css";
import config from "../../../../../config.json"


const OrgDataEdit = () => {

    const route = config.API_URL + '/Organization';

    const { data: orgDetails, isLoading, error } = useHrmsApi(route)

    return (
        <div>
            { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> {error}</h6></div>}
            { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div>}
            
            { orgDetails && <OrgDataEditDetails details={orgDetails} />}
        </div>
    );
}

export default OrgDataEdit;