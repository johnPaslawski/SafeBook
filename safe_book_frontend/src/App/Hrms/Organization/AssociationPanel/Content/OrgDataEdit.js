import OrgDataEditDetails from "./OrgDataEditDetails";
import useHrmsApi from "../../HrmsApi/useHrmsApiGet";
import "../AssociationPanel.css";


const OrgDataEdit = () => {

    const route = 'https://localhost:44325/api/Organization';

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