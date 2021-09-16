import useHrmsApi from "../../../HrmsApi/useHrmsApiGet";
import PlanningDetails from "./PlanningDetails";


const Planning = () => {

    // const route = 'https://localhost:44325/api/Organization';
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