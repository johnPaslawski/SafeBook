import { Route, Switch } from "react-router-dom"
import config from '../../config.json'
import { axiosClient } from "../Api/Api";

const Shop = () => {
    const callApi = () => axiosClient().get(`${config.API_URL}/Users?like=Ad`).then(news => console.log(news));
    
    return(
            <div>
                <Switch>
                    <Route path="/shop">
                        <button onClick={callApi}>Call api</button>
                    </Route>
                </Switch>
            </div>
        );
    };

export default Shop;