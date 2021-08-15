import "./../Content.css"

const ElementInfo = (props) => {
    
    return(
        <div className="element_info">
            <div className="element_info-front main-content" style={{backgroundImage: "url(/news_logo.jpg)"}}>
                <img className="element_info-img" src={process.env.PUBLIC_URL + `/${props.elementData.imageName}`}></img>
            </div>
            <div className="element_info-content title-content-grid">
                <div className="element_info-content-title title-content-title">
                    <h1>{props.elementData.title}</h1>
                </div>
                <div className="element_info-content-descr">
                    {props.elementData.description}
                </div>
            </div>
            <div className="element_info-aditional_inf">
                {props.elementData.creationDate}
            </div>
        </div>
    );
}

export default ElementInfo;