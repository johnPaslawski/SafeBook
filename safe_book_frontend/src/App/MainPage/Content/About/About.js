import about from "./Abount.module.css";

const About = () => {

    const showMainDesc = (e) => {
        document.querySelector(`.${about.descriptionHideLeft}`).classList.add(about.leftHideToAdd);
        document.querySelector(`.${about.descriptionHideRight}`).classList.add(about.rightHideToAdd);
        document.querySelector(`.${about.descriptionHideTitle}`).classList.add(about.titleHideToAdd);
    }

    const showSecDesc = () => {
        let topBubble = document.querySelector(`.${about.topBubble}`);
        if(topBubble.classList.contains(about.topBubbleShowCall)){
            let bubbleElemList = document.querySelector(`.${about.mainBubbleContent}`).children;
            for(let elem of bubbleElemList){
                elem.classList.remove(elem.classList[2]);
            }
            let allSubBubble = document.querySelectorAll(".bubble");
            for(let elem of allSubBubble){
                if(elem.classList.contains("activeBubble")){
                    elem.style.height = "150px";
                    elem.style.width = "150px";
                    elem.classList.remove("activeBubble");
                    elem.querySelector("div").style.display = "none";
                    setTimeout( () => {
                        elem.querySelector("span").style.display = "block";
                    }, 500)
                }
            }
        }
        else{
            topBubble.classList.add(about.topBubbleShowCall);
            document.querySelector(`.${about.topLeftBubble}`).classList.add(about.topLeftBubbleShowCall);
            document.querySelector(`.${about.leftBubble}`).classList.add(about.leftBubbleShowCall);
            document.querySelector(`.${about.leftBottomBubble}`).classList.add(about.leftBottomBubbleShowCall);
            document.querySelector(`.${about.bottomBubble}`).classList.add(about.bottomBubbleShowCall);
            document.querySelector(`.${about.bottomRightBubble}`).classList.add(about.bottomRightBubbleShowCall);
            document.querySelector(`.${about.rightBubble}`).classList.add(about.rightBubbleShowCall);
            document.querySelector(`.${about.topRightBubble}`).classList.add(about.topRightBubbleShowCall);

        }
    }

    async function onClickSubBubble(e){
        let curElem = e.target;
        while(!curElem.classList.contains("bubble")){
            curElem = curElem.parentElement;
        }
        if(curElem.classList.contains("activeBubble")){
            curElem.style.height = "150px";
            curElem.style.width = "150px";
            curElem.classList.remove("activeBubble");
            curElem.querySelector("div").style.display = "none";
            setTimeout( () => {
                curElem.querySelector("span").style.display = "block";
            }, 500)
        }
        else{
            let allSubBubble = document.querySelectorAll(".bubble");
            for(let elem of allSubBubble){
                if(elem !== curElem && elem.classList.contains("activeBubble")){
                    elem.style.height = "150px";
                    elem.style.width = "150px";
                    elem.classList.remove("activeBubble");
                    elem.querySelector("div").style.display = "none";
                    setTimeout( () => {
                        elem.querySelector("span").style.display = "block";
                    }, 500)
                }
            }
            curElem.classList.add("activeBubble");
            curElem.style.height = "250px";
            curElem.style.width = "250px";
            setTimeout( () => {
                if(curElem.classList.contains("activeBubble")){
                    curElem.querySelector("span").style.display = "none";
                    curElem.querySelector("div").style.display = "block";
                }
            }, 500)
        }
    }
    
    
    return(
        <div className={about.content}>
            <div className={about.title}>
                <img className={about.titleBackground} alt="" src={process.env.PUBLIC_URL + '/Clouds.jpg'}/>
                <div className={about.titleContent}>
                    <div className={about.titleContentMain}>PATRTYTURA</div>
                    <div className={about.titleContentSub}>Krótko o nas</div>
                </div>
            </div>
            <div className={about.descriptionMain} onClick={showMainDesc}>
                <div className={about.descriptionMainTitle}>Ogólne</div>
                <div className={about.descriptionMainDesc}>
                    Stowarzyszenie powstało w 2021 roku, zrzeszając ludzi kultury: kompozytorów, 
                    dyrygentów, instrumentalistów i wokalistów. Naszym głównym celem jest organizacja 
                    wydarzeń o charakterze kulturalnym i edukacyjnym na terenie Małopolski. 
                    Nasze wydarzenia są skierowanie do szerokiego grona odbiorców w każdej grupie 
                    wiekowej, mające na celu popularyzacje wybitnych dzieł współczesnych kompozytorów i uwrażliwianie na muzykę.
                </div>
                <div className={about.descriptionHide}>
                    <div className={about.descriptionHideLeft}></div>
                    <div className={about.descriptionHideRight}></div>
                    <div className={about.descriptionHideTitle}>
                        <div className={about.descriptionHideTitleMain}>O nas</div>
                        <div className={about.descriptionHideTitleSub}>(Naciśnij)</div>
                    </div>
                </div>
            </div>
            <div className={about.descriptionBubble}>
                <div className={about.mainBubble} onClick={showSecDesc}>
                    <div className={about.mainBubbleText}>Cele</div>
                </div>
                <div className={about.mainBubbleContent}>
                        <div className={`${about.rightBubble} bubble`} onClick={onClickSubBubble}>
                            <span>ŻYCIE</span>
                            <div className={about.hidenBubbleText}>
                                Aktywny udział w życiu społecznym i kulturalnym regionu i kraju.
                            </div>
                        </div>
                        <div className={`${about.topRightBubble} bubble`} onClick={onClickSubBubble}>
                            <span>WYDAWNICTWO</span>
                            <div className={about.hidenBubbleText}>
                                Wydawnictwo płyt, książek, czasopism, nut.
                            </div>
                        </div>
                        <div className={`${about.topBubble} bubble`} onClick={onClickSubBubble}>
                            <span className={about.topBubbleText}>ANGAŻOWANIE</span>
                            <div className={`${about.hidenBubbleText} ${about.colorWhite}`}>
                                Angażowanie dzieci i młodzieży w działalność artystyczną.
                            </div>
                        </div>
                        <div className={`${about.topLeftBubble} bubble`} onClick={onClickSubBubble}>
                            <span className={about.colorWhite}>PROMOWANIE</span>
                            <div className={`${about.hidenBubbleText} ${about.colorWhite}`}>
                                Promowanie profesjonalnej działalności artystycznej o zasięgu lokalnym, krajowym i międzynarodowym.
                            </div>
                        </div>
                        <div className={`${about.leftBubble} bubble`} onClick={onClickSubBubble}>
                            <span>ORGANIZACJA</span>
                            <div className={about.hidenBubbleText}>
                                Organizowanie konferencji, seminariów, szkoleń i wykładów, 
                                imprez kulturalnych, koncertów, prapremier, festiwali, wernisaży, 
                                przedstawień teatralnych.
                            </div>
                        </div>
                        <div className={`${about.leftBottomBubble} bubble`} onClick={onClickSubBubble}>
                            <span className={about.colorWhite}>WSPARCIE</span>
                            <div className={`${about.hidenBubbleText} ${about.colorWhite}`}>
                                Realizację i wspieranie finansowe przedsięwzięć i projektów (także o charakterze ciągłym) o zasięgu lokalnym, krajowym i międzynarodowym.
                            </div>
                        </div>
                        <div className={`${about.bottomBubble} bubble`} onClick={onClickSubBubble}>
                            <span className={about.colorWhite}>ROZWÓJ</span>
                            <div className={`${about.hidenBubbleText} ${about.colorWhite}`}>
                                Wspieranie rozwoju kariery młodych muzyków, w tym kompozytorów, dyrygentów, wokalistów i instrumentalistów.
                            </div>
                        </div>
                        <div className={`${about.bottomRightBubble} bubble`} onClick={onClickSubBubble}>
                            <span className={about.bottomRightBubbleText}>WSPÓŁPRACA</span>
                            <div className={`${about.hidenBubbleText} ${about.colorWhite}`}>
                                Współpracę ze szkołami i uczelniami wyższymi, samorządami, organizacjami pozarządowymi, mediami.
                            </div>
                        </div>
                    </div>
            </div>
            <div className={about.thanks}>
                <div className={about.thanksContentMain}>
                    Dzięki Państwa wsparciu będziemy mogli organizować przede wszystkim koncerty solowe, 
                    kameralne, symfoniczne i chóralne, do których dostęp będzie miało szerokie grono odbiorców.
                </div>
                <div className={about.thanksContentSub}>
                    Starannie dobieramy program wszelkich wydarzeń, by zainteresował słuchacza i był atrakcyjny w odbiorze.
                </div>
            </div>
        </div>
    );
}

export default About;