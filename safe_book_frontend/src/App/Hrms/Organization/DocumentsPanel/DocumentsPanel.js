import './DocumentsPanel.css';
import { useState } from 'react';
import { Component } from 'react';

const DocumentsPanel = () => {

    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
       
        //console.log(button);
    }
    
    return (  <div>
        
    <div className="documentsPanel">

    <div className="documentsPanelButtonContainer" >
    { isLoading && <div className="text-center"><div className="loading spinner-border"></div><div>Ładuję dane . . .</div></div> }

        <a className="link" href="https://drive.google.com/drive/u/1/my-drive" target="_blank" style={{visibility: isLoading ? 'hidden' : 'visible'}}>
        <button className="btn documentsPanelButton">
            
            <img className="googleDriveLogo" onLoad={handleLoad} src={process.env.PUBLIC_URL + '/googledrivelogo.png'}></img>
            <div className="documentsPanelButtonText"> Przejdź do Dysku Google</div>
        </button>
        </a>
    </div>
    
    </div>
    </div>
);
}
 
export default DocumentsPanel;