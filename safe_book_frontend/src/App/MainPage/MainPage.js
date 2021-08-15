import Header from './Header/Header';
import ContentRouter from './Content/ContentRouter'
import Footer from './Footer/Footer';
import './MainPage.css'
import { useState, useEffect } from "react";

const MainPage = (props) => {

    const [lookingValue, SetLookingValue] = useState("");

    return(
        <div className="main-page" style={{backgroundImage: `url(/music_note.jpg)`}}>
            <Header userInfo={props.userInfo} SetLookingValue={SetLookingValue} />
            <ContentRouter like={lookingValue} />
            <Footer />
        </div>
    );
}

export default MainPage;