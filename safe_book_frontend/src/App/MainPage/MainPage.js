import HeaderContainer from './Header/HeaderContainer';
import ContentRouter from './Content/ContentRouter'
import Footer from './Footer/Footer';
import mainPage from './MainPage.module.css'

const MainPage = () => {

    return(
        <div className={mainPage.mainPage}>
            <HeaderContainer />
            <ContentRouter/>
            <Footer />
        </div>
    );
}

export default MainPage;