import { Route, Switch } from "react-router-dom"

const Shop = () => {
    return(
        <div>
            <Switch>
                <Route path="/shop">Shop</Route>
            </Switch>
        </div>
    );
};

export default Shop;