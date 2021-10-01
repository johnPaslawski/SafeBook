import Hrms from "../Hrms";
import { Route, Switch, Link } from "react-router";
import '../Hrms.css';
import Org_leftside_menu from "./Org_leftside_menu";
import Top_menu from "../Top_menu";
import OrganizationContentRouter from "./OrganizationContentRouter";

const Organization = () => {
    console.log('weszłem do Organization')
    return (
        <div>
            <Top_menu />
            <Org_leftside_menu />
            <OrganizationContentRouter />
        </div>

    );
}

export default Organization;