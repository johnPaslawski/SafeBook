import { Link } from 'react-router-dom';
import './AssociationPanel.css';
import './AssociationContentRouter';
import AssociationContentRouter from './AssociationContentRouter';

const AssociationPanel = () => {
    return (
        <div>


            <div className="associationPanel">
                <div className="associationPanelHeader">
                    <div>
                        <p>Association Panel</p>
                    </div>
                </div>
                <div className="AssociationPanel-leftMenu">
                    <Link to="/hrms/organization/association/orgdata">
                        <div className="box2">
                            
                            <div className="box3"><i class="bi bi-caret-right-fill"></i></div>
                            <div className="box3">Organizacja</div>
                        </div>
                    </ Link>
                    <Link to="/hrms/organization/association/stats">
                    <div className="box2">
                        
                        <div className="box3"><i class="bi bi-caret-right-fill"></i></div>
                        <div className="box3">Statystyki</div>
                    </div>
                    </ Link>
                    <Link to="/hrms/organization/association/planning">
                    <div className="box2">
                        
                        <div className="box3"><i class="bi bi-caret-right-fill"></i></div>
                        <div className="box3">Planowanie</div>
                    </div>
                    </Link>
                </div>
                <div className="AssociationPanel-contentRouter">
                    <AssociationContentRouter />
                </div>
            </div>


        </div>
    );
}

export default AssociationPanel;