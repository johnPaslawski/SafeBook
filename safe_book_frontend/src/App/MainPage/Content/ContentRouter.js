import { Route, Redirect, Switch} from 'react-router-dom';

import News from "./News/News";
import AboutNews from './News/AboutNews/AboutNews';
import Projects from  './Projects/Projects';
import AboutProject from  './Projects/AboutProject/AboutProject';
import About from './About/About';
import Offer from './Offer/Offer';
import Contacts from './Contacts/Contacts';

const ContentRouter = (props) => {
    return(
        <div className="content">
            <Switch>
                <Route exact path="/main"> {/*Default(can be changed)*/}
                    <Redirect to="/main/news"></Redirect>
                </Route>

                <Route exact path="/main/news">
                    <News like={props.like}/>
                </Route>

                <Route exact path="/main/news/:1" component={AboutNews} />

                <Route exact path="/main/projects">
                    <Projects like={props.like}/>
                </Route>

                <Route path="/main/projects/:1" component={AboutProject} />

                <Route exact path="/main/about" component={About} />

                <Route exact path="/main/offer" component={Offer} />

                <Route exact path="/main/contact" component={Contacts} />
            </Switch>
        </div>
    );
}

export default ContentRouter;