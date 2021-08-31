import { Route, Redirect, Switch} from 'react-router-dom';

import NewsContainer from "./News/NewsContainer";
import AboutNews from './News/AboutNews/AboutNews';
import Projects from  './Projects/Projects';
import AboutProject from  './Projects/AboutProject/AboutProject';
import About from './About/About';
import Offer from './Offer/Offer';
import Contacts from './Contacts/Contacts';

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

                <Route exact path="/main/news/:id" component={AboutNews} />

                <Route exact path="/main/projects">
                    <Projects />
                </Route>

                <Route path="/main/projects/:id" component={AboutProject} />

                <Route exact path="/main/about" component={About} />

                <Route exact path="/main/offer" component={Offer} />

                <Route exact path="/main/contact" component={Contacts} />
            </Switch>
        </div>
    );
}

export default ContentRouter;