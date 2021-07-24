import { BrowserRouter as Switch, Redirect, Route} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';


const MainPageRouter = () => {


    return(
        <div>
            <Header />

            <Switch>
            <Redirect from="/" to="/news"/>

            <Route exact path="/news">
            </Route>

            <Route exact path="/news/:id">
            </Route>

            <Route exact path="/projects">
            </Route>

            <Route path="/projects/:id">
            </Route>

            <Route exact path="/about">
            </Route>

            <Route exact path="/offer">
            </Route>

            <Route exact path="/contact">
            </Route>
            </Switch>

            <Footer />
        </div>
    );
}


export default MainPageRouter;