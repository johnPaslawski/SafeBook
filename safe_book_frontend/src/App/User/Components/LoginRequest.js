import { getAuth } from "../../../redux/reducers/Authentication/authenticationReducer";

export default class LoginRequest extends React.Component {

    constructor (props) {
        super(props);
        getAuth();
    }

    render(){

    }
}