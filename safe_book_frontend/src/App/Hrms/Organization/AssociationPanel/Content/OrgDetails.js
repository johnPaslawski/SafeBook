import { Link } from "react-router-dom";

const OrgDetails = ({ details }) => {
    
    return (
        <div>
            <div className='optionsFlex'>
            <button className='optionsButton'><i class="bi bi-files"></i> Copy</button>
            <button className='optionsButton'><i class="bi bi-printer"></i> Print</button>
            <Link to="/hrms/organization/association/edit"><button className='optionsButton'><i class="bi bi-pencil-square"></i> Edit</button></Link>
            </div>
            <table className="table table-borderless table-hover">
                <tbody>
                    <tr>
                        <th scope="row">Nazwa organizacji:</th>
                        <td>{details.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Adres:</th>
                        <td> {details.adress}</td>
                    </tr>
                    <tr>
                        <th scope="row">KRS:</th>
                        <td>{details.krs}</td>
                    </tr>
                    <tr>
                        <th scope="row">REGON:</th>
                        <td>{details.regon}</td>
                    </tr>
                    <tr>
                        <th scope="row">NIP:</th>
                        <td>{details.nip}</td>
                    </tr>
                    <tr>
                        <th scope="row">Numer konta:</th>
                        <td>{details.bankAccountNumber}</td>
                    </tr>
                </tbody>
            </table>
            
           
        </div>
    );
}

export default OrgDetails;
