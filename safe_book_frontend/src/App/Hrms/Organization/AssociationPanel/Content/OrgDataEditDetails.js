import React, { Componenet } from "react";
import { Component } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import "../AssociationPanel.css";
import config from "../../../../../config.json"
import { useApi, axiosClient } from "../../../../Api/Api";


const OrgDataEditDetails = (props) => {
  const [name, setName] = useState(props.details.name);
  const [adress, setAdress] = useState(props.details.adress);
  const [krs, setKrs] = useState(props.details.krs);
  const [regon, setRegon] = useState(props.details.regon);
  const [nip, setNip] = useState(props.details.nip);
  const [bankAccountNumber, setBankAccountNumber] = useState(props.details.bankAccountNumber);

  const [isLoading, setIsLoading] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${config.API_URL}/Organization/${props.details.id}`;

    const orgUpdated = { name, adress, krs, regon, nip, bankAccountNumber };

    axiosClient()(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: orgUpdated,
    })
      .then(() => {
        console.log("UPDATED ORG DATA! apiPUT");
        setIsLoading(false);
        setSuccess(true);
        setTimeout(() => {
          props.history.push("/hrms/organization/association/orgdata/");
        }, 2000);

      })
      .catch((err) => {
        if (err.name === "Abort error") {
          console.log("Abortowano");
        } else {
          setError(err.message);
          setIsLoading(false);
          console.log(err.message);
        }
      });

    return () => {
      console.log("cleanup after apiPUT");
    };
  };

  return (
    
    <div>
      { success && (
                <div className="success">
                    <div onClick={() => { props.history.push("/hrms/organization/association/orgdata/") }} className="successContent">
                        <div>
                            <i className="small material-icons">done</i>
                        </div>
                        <div>UAKTUALNIONO DANE</div>
                        <div> </div>
                        <div>Wracam do Panelu . . .</div>
                    </div>
                </div>) }
      
      {!success && (<div><div className="optionsFlex">
      <img className="alertIcon" src={process.env.PUBLIC_URL + '/alert.png'}></img>
        <h6 className="orgEditWarning">
          Edytujesz teraz dane organizacji, nie zamykaj przeglądarki
        </h6>
      </div>
      <form id="orgEdit" onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="orgName">Nazwa organizacji:</label>
          <div>
            <input
              className="orgEditInput"
              type="text"
              id="orgName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor="orgAdress">Adres:</label>
          <div>
            <input
              className="orgEditInput"
              type="text"
              id="orgAdress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            >
              {}
            </input>
          </div>
        </div>
        <div>
          <label htmlFor="KRS">KRS:</label>
          <div>
            <input
              className="orgEditInput"
              type="text"
              id="KRS"
              value={krs}
              onChange={(e) => setKrs(e.target.value)}
            >
              {}
            </input>
          </div>
        </div>
        <div>
          <label htmlFor="REGON">REGON:</label>
          <div>
            <input
              className="orgEditInput"
              type="text"
              id="REGON"
              value={regon}
              onChange={(e) => setRegon(e.target.value)}
            >
              {}
            </input>
          </div>
        </div>
        <div>
          <label htmlFor="NIP">NIP:</label>
          <div>
            <input
              className="orgEditInput"
              type="text"
              id="NIP"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <label htmlFor="orgBankAccount">Numer konta:</label>
          <div>
            <input
              className="orgEditInput"
              type="text"
              id="orgBankAccount"
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
            >
              {}
            </input>
          </div>
        </div>
      </form>
      <br></br>
      <div className="saveOrCancelContainer"><button className="btn btn-success btn-sm" type="submit" form="orgEdit">
        Zapisz
      </button>
      <button onClick={ () => {props.history.push("/hrms/organization/association/orgdata/") }} className="btn btn-danger btn-sm">
        Anuluj
      </button></div></div>)}
      
      
    </div>
  );
};
export default withRouter(OrgDataEditDetails);
