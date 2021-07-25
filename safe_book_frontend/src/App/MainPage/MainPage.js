import { BrowserRouter as Switch, Redirect, Route} from 'react-router-dom';
import Header from './Header/Header';
import Content from './Content/ContentRouter'
import Footer from './Footer/Footer';
import './MainPage.css'

const MainPage = (props) => {
    return(
        <div className="main-page">
            <Header userInfo={props.userInfo}/>
            <Content />
            <Footer />
        </div>
    );
}

export default MainPage;