import "./Hrms.css";
import React from "react";
import HrmsContentRouter from "./HrmsContentRouter";
import HrmsHeader from "./HrmsHeader";

const Hrms = () => {

  
  return (
    <div>
      <HrmsHeader />

      <HrmsContentRouter />
      
      {/* {vidLoaded && } */}
      {/* <Content /> */}
      
      <video onCanPlay={() => { document.querySelector('video').playbackRate = 0.8 }} autoPlay muted loop id="myVideo">
        <source src={process.env.PUBLIC_URL + '/my_video2.mp4'} type="video/mp4" />
      </video>
    </div>

  );
}


export default Hrms;
