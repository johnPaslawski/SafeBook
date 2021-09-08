import "../AssociationPanel.css";
import { Link } from "react-router-dom";

const StatsDetails = ({ details }) => {
    return (<div>
        <div className="userProfileContainerContent">
                STATYSTYKI
            </div>

<div className='optionsFlex'>
            <button className='optionsButton'><i class="bi bi-files"></i> Copy</button>
            <button className='optionsButton'><i class="bi bi-printer"></i> Print</button>
            
            </div>
        <table className="table table-sm ">
            
            <tbody>
                <tr>
                    <th className="column-narrow" scope="row">Liczba członków:</th>
                    <td >{ details.membersList.length }</td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Data założenia</th>
                    <td > 3 marca 2020 </td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Zrealizowane projekty</th>
                    <td > 2 <button type="button" className=" optionsButton2"><i class="bi bi-arrow-down-right-square-fill"></i> Projekty</button> </td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Suma otrzymanych dofinansowań (brutto PLN)</th>
                    <td > 48 500 </td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Licznik odwiedzin witryny</th>
                    <td > 21 </td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Licznik odwiedzin Sklepu</th>
                    <td > 33 <button type="button" className=" optionsButton2"><i class="bi bi-arrow-down-right-square-fill"></i> Sklep</button></td>
                </tr>
                <tr>
                    <th className="column-narrow" scope="row">Złożone zamówienia</th>
                    <td > 14 </td>
                </tr>
            </tbody>
        </table>


    </div>);
}

export default StatsDetails;