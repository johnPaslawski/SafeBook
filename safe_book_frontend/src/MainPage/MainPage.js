import React, {Component, useEffect, useState} from 'react';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';


const MainPage = () => {
    return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}


export default MainPage;