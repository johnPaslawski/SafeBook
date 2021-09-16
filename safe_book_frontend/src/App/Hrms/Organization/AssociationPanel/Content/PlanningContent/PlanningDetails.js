import { withRouter } from "react-router";


const PlanningDetails = (props) => {
    return (
        <div className="planningContainer">
            <div className="planningColumns">
                <div className="planningColumn" id="toDo">
                    <div className="planningColumnTitle">Do zrobienia:</div>
                    <div className="planningColumnContent">
                        <div className="planningCard">
                            <div className="planningCardTitle">
                                Zadanie pierwsze
                            </div>
                            <div className="planningCardContent">
                                content roboczy, lorem ipsum, opis zadania i podobne szczegóły, chociaż samą listę osób bym ukrył
                            </div>
                        </div>
                        <div className="planningCard">
                            <div className="planningCardTitle">
                                Zadanie drugie
                            </div>
                            <div className="planningCardContent">
                                Zastosujemy tutaj inny opis, dłuższy, zobaczmy jak poradzą sobie overflowy. , lorem ipsum, opis zadania i podobne szczegóły, chociaż samą listę osób bym ukrył
                            </div>
                        </div>
                    </div>
                </div>
                <div className="planningColumn" id="inProgress">
                    <div className="planningColumnTitle">W trakcie realizacji:</div>
                    <div className="planningColumnContent">
                    <div className="planningCard">
                            <div className="planningCardTitle">
                                Zadanie trzecie
                            </div>
                            <div className="planningCardContent"> 
                                listę osób bym ukryłdasdsasdasdas dasdasdasdukryłd asdsasdasdasdasdasda sdukryłdasdsasdasda sdasdasda sdukryłdasds asdasdasdasdasdasd
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