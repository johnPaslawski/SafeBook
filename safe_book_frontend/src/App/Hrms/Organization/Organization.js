import Hrms from "../Hrms";
import { Route, Switch, Link } from "react-router";
import '../Hrms.css';
import Org_leftside_menu from "./Org_leftside_menu";
import Org_top_menu from "./Org_top_menu";
import OrganizationContentRouter from "./OrganizationContentRouter";

const Organization = () => {
    console.log('weszłem do Organization')
    return (
        <div>
            <Org_top_menu />
            <Org_leftside_menu />
            <OrganizationContentRouter />
        </div>

    );
}

export default Organization;