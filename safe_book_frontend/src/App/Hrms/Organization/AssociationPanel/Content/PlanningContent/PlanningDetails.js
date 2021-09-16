import { withRouter } from "react-router";


const PlanningDetails = (props) => {
    return (
        
        <div className="planningContainer">
            <div className="userProfileContainerContent">
                PLANOWANIE
            </div>
            <div className="planningColumns">
                <div className="planningColumn" id="toDo">
                    <div className="planningColumnTitle">Do zrobienia:</div>
                    <div className="planningColumnContent">
                        <div className="planningCard">
                            <div className="planningCardContent">
                                Tytuł:
                            </div>
                            <div className="planningCardTitle">
                                Wysłać ofertę koncertową do klienta
                            </div>
                            <div className="planningCardContent">
                                Dodano:
                            </div>
                            <div className="planningCardContent">
                                00.00.0000
                            </div>
                            <div className="planningCardContent">
                                Opis:
                            </div>
                            <div className="planningCardContent">
                                Należy wysłać szczegółową ofertę koncertową do klienta
                            </div>
                        </div>
                        <div className="planningCard">
                            <div className="planningCardContent">
                                Tytuł:
                            </div>
                            <div className="planningCardTitle">
                                Zaprojektowanie i stworzenie oferty
                            </div>
                            <div className="planningCardContent">
                                Dodano:
                            </div>
                            <div className="planningCardContent">
                                00.00.0000
                            </div>
                            <div className="planningCardContent">
                                Opis:
                            </div>
                            <div className="planningCardContent">
                                Należy zaprojektować i wykonać przy użyciu "Canva" szczegółową ofertę stowarzyszenia
                            </div>
                        </div>
                    </div>
                </div>
                <div className="planningColumn" id="inProgress">
                    <div className="planningColumnTitle">W trakcie realizacji:</div>
                    <div className="planningColumnContent">
                        <div className="planningCard">
                        <div className="planningCardContent">
                                Tytuł:
                            </div>
                            <div className="planningCardTitle">
                                Sponsorzy
                            </div>
                            <div className="planningCardContent">
                                Dodano:
                            </div>
                            <div className="planningCardContent">
                                00.00.0000
                            </div>
                            <div className="planningCardContent">
                                Opis:
                            </div>
                            <div className="planningCardContent">
                                Wyszukiwanie sponsorów przy użyciu listy lokalnych przedsiębiorców/firm potencjalnie zainteresowanych mecenatem
                            </div>
                        </div>
                    </div>
                </div>
                <div className="planningColumn" id="done">
                    <div className="planningColumnTitle">Ukończone:</div>
                    <div className="planningColumnContent">

                    </div>
                </div>
            </div>

        </div>);
}

export default withRouter(PlanningDetails);

// { props.cards.map((card)=>(
//                 <div key={card.id}>{ card.title }</div>
//                 )) }