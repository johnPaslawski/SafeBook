import { useGet as useHrmsApi} from "../../../../../Api/Api";
import PlanningDetails from "./PlanningDetails";
import config from "../../../../../../config.json"


const Planning = () => {
    const route = config.API_URL + '/Organization';

    // const { data: orgDetails, isLoading, error } = useHrmsApi(route)

    const isLoading = true;
    
    const cards = [{id:1, status:"toDo", title:"Tytuł", description:"Karta pierwsza"}, 
        {id:1, status:"inProgress", title:"Tytuł 2", description:"2 Karta druga"}, 
        {id:3, status:"done", title:"Tytuł 3", description:"3 Karta trzecia"}];
    
    console.log("CARDS:", cards);
        
    const users = null;
    return ( 
        <div>
            {/* { error && <div className="failedToFetch"><h6><i class="bi bi-exclamation-triangle-fill"> </i> { error}</h6></div> } */}
            {/* { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> } */}
            { <PlanningDetails cards={ cards } users={ users }/> }
        </div>
     );
}
 
export default Planning;