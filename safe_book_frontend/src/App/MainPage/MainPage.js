import Header from './Header/Header';
import ContentRouter from './Content/ContentRouter'
import Footer from './Footer/Footer';
import './MainPage.css'
import { BrowserRouter as Switch} from 'react-router-dom';

const MainPage = (props) => {
    return(
        <div className="main-page">
            <Switch>
                <Header userInfo={props.userInfo}/>
                <ContentRouter />
                <Footer />
            </Switch>
        </div>
    );
}

export default MainPage;