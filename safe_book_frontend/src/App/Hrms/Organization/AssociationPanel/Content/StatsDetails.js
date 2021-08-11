import "../AssociationPanel.css";

const StatsDetails = ({ details }) => {
    return (<div>


        <table className="table table-sm table-hover">
            
            <tbody>
                <tr>
                    <th className="column-narrow" scope="row">Liczba członków:</th>
                    <td >{ details.membersList.length }</td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Dana X</th>
                    <td > { } </td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Dana Y</th>
                    <td > { } </td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Dana Z</th>
                    <td > { } </td>
                </tr>
            </tbody>
        </table>


    </div>);
}

export default StatsDetails;