import Header from './Header/Header';
import ContentRouter from './Content/ContentRouter'
import Footer from './Footer/Footer';
import mainPage from './MainPage.module.css'
import { useState} from "react";


const MainPage = (props) => {

    const [lookingValue, SetLookingValue] = useState("");

    return(
        <div className={mainPage.mainPage}>
            <Header userInfo={props.userInfo} SetLookingValue={SetLookingValue} />
            <ContentRouter like={lookingValue} />
            <Footer />
        </div>
    );
}

export default MainPage;