const OrgDetails = ({ details }) => {
    // console.log('Wszedłem do OrgDetails');
    // console.log('details :')
    // console.log(details)

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
                        <th scope="row">Liczba członków:</th>
                        <td>{details.membersList.length}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrgDetails;

{/* <table class="">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}