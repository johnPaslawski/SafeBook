import ElementInfo from "../../ElementInfo/ElementInfo";
import { useParams } from "react-router";
import useGetApi from "../../../../Api/useGetApi";

const AboutNews = () => {

    const {id} = useParams();
    const {data, isPending, error} = useGetApi(`/api/News/${id}`);

    return(
        data && <ElementInfo elementData={data}/>
    );
}

export default AboutNews;