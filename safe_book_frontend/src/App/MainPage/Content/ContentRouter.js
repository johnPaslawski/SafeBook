import { Route, Redirect, Switch} from 'react-router-dom';

import NewsContainer from "./News/NewsContainer";
import ElementInfoContainer from './ElementInfo/ElementInfoContainer';
import About from './About/About';
import Offer from './Offer/Offer';
import Contacts from './Contacts/Contacts';
import ProjectsContainer from './Projects/ProjectsContainer';

const ContentRouter = () => {
    return(
        <div className="content">
            <Switch>
                <Route exact path="/main"> {/*Default(can be changed)*/}
                    <Redirect to="/main/news"></Redirect>
                </Route>

                <Route exact path="/main/news">
                    <NewsContainer />
                </Route>

                <Route exact path="/main/projects">
                    <ProjectsContainer />
                </Route>

                <Route exact path="/main/element/:type/:id" component={ElementInfoContainer} />

                <Route exact path="/main/about" component={About} />

                <Route exact path="/main/offer" component={Offer} />

                <Route exact path="/main/contact" component={Contacts} />
            </Switch>
        </div>
    );
}

export default ContentRouter;