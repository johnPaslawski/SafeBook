import ElementInfo from "../../ElementInfo/ElementInfo";
import { useParams } from "react-router";
import useGetApi from "../../../../Api/useGetApi";

const AboutProject = () => {

    const {id} = useParams();
    const {data, isPending, error} = useGetApi(`/api/Projects/${id}`);

    return(
        data && <ElementInfo elementData={data}/>
    );
}

export default AboutProject;