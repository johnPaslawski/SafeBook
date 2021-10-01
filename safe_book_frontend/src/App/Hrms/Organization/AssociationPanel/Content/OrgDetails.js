import { Link } from "react-router-dom";

const OrgDetails = ({ details }) => {
    
    const HandleClick = (e) => {
        e.preventDefault();
        const orgData = {
            Nazwa: details.name,
            Adres: details.adress,
            KRS: details.krs,
            REGON: details.regon,
            NIP: details.nip,
            Konto: details.bankAccountNumber
        }
        navigator.clipboard.writeText(JSON.stringify(orgData));
          const copyButton = document.querySelector("#copyButton");
    
          copyButton.className = 'copied';
          copyButton.innerHTML = '<i class="bi bi-check-lg"></i> Skopiowano';
          
          setTimeout(()=>{
            copyButton.className = 'optionsButton';
            copyButton.innerHTML = '<i class="bi bi-files"></i> Kopiuj';
          }, 2000);
          
      }

    return (
        <div>
            <div className="userProfileContainerContent">
                DANE ORGANIZACJI
            </div>
            <div className='optionsFlex'>
            <button onClick={ HandleClick } className='optionsButton' id="copyButton"><i class="bi bi-files"></i> Kopiuj</button>
            <button className='optionsButton'><i class="bi bi-printer"></i> Drukuj</button>
            <Link to="/hrms/organization/association/edit"><button className='optionsButton'><i class="bi bi-pencil-square"></i> Edytuj</button></Link>
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
