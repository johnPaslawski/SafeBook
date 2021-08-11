const OrgDetails = ({ details }) => {
    
    return (
        <div>
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
                        <th scope="row">Konto bankowe:</th>
                        <td>{details.bankAccountNumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrgDetails;
