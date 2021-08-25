import React, { Componenet } from "react";
import { Component } from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const OrgDataEditDetails = ({ details }) => {
  const [name, setName] = useState(details.name);
  const [adress, setAdress] = useState(details.adress);
  const [krs, setKrs] = useState(details.krs);
  const [regon, setRegon] = useState(details.regon);
  const [nip, setNip] = useState(details.nip);
  const [bankAccountNumber, setBankAccountNumber] = useState(details.bankAccountNumber);

  const [isLoading, setIsLoading] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://localhost:44325/api/Organization/${details.id}`;

    const orgUpdated = { name, adress, krs, regon, nip, bankAccountNumber };

    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orgUpdated),
    })
      .then(() => {
        console.log("UPDATED ORG DATA! apiPUT");
        setIsLoading(false);
        setIsDone(true);
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
      <div className="optionsFlex">
        <h6 className="orgEditWarning">
          Edytujesz teraz dane organizacji, nie zamykaj przeglądarki
        </h6>
      </div>
      <form id="orgEdit" onSubmit={handleSubmit}>
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
      <button className="btn btn-success btn-sm" type="submit" form="orgEdit">
        Zapisz
      </button>
      {isDone && <Redirect to="/hrms/organization/association/orgdata" />}
    </div>
  );
};
export default OrgDataEditDetails;
