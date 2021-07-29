import { BrowserRouter as Switch, Route} from 'react-router-dom';

import News from "./News/News";
import AboutNews from './News/AboutNews/AboutNews';
import Projects from  './Projects/Projects';
import AboutProjects from  './Projects/AboutProject/AboutProject';
import About from './About/About';
import Offer from './Offer/Offer';
import Contacts from './Contacts/Contacts';

const ContentRouter = () => {
    return(
        <div className="content">
            <Route exact path="/" component={News} />  {/*Default(can be changed)*/}

            <Route exact path="/news" component={News} />

            <Route exact path="/news/:id" component={AboutNews} />

            <Route exact path="/projects" component={Projects} />

            <Route path="/projects/:id" component={AboutProjects} />

            <Route exact path="/about" component={About} />

            <Route exact path="/offer" component={Offer} />

            <Route exact path="/contact" component={Contacts} />
        </div>
    );
}

export default ContentRouter;