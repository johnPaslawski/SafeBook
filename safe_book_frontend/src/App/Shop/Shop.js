import { Route, Switch } from "react-router-dom"
import config from '../../config.json'
import axios from 'axios';

const Shop = () => {
    const callApi = () => axios.get(`${config.API_URL}/News`).then(news => console.log(news));
    
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