import Header from './Header/Header';
import ContentRouter from './Content/ContentRouter'
import Footer from './Footer/Footer';
import './MainPage.css'
import { useState, useEffect } from "react";

const MainPage = (props) => {

    const [lookingValue, SetLookingValue] = useState("");

    return(
        <div className="main-page">
            <Header SetLookingValue={SetLookingValue} />
            <ContentRouter lookingValue={lookingValue} />
            <Footer />
        </div>
    );
}

export default MainPage;