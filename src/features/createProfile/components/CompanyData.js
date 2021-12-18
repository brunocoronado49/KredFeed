import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function CompanyData(props) {

  const [companyDataState, setCompanyDataState] = useState(props);

  const updateDataCompanyValue = (event) => {
    setCompanyDataState(event.target.value);
  }

  return (
    <div>
      <h4>Company data</h4>
      <div className="form-group p-2">
        <input
          type="text"
          className="form-control"
          placeholder="Razón social"
          value={companyDataState.razonSocial}
          onChange={updateDataCompanyValue}
        />
      </div>
      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre comercial"
            value={companyDataState.nombreComerial}
            onChange={updateDataCompanyValue}
          />
        </div>
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nacionalidad"
            value={companyDataState.nacionalidad}
            onChange={updateDataCompanyValue}
          />
        </div>
        <div className="form-group col-auto">
          <input type="text" className="form-control" 
          placeholder="RFC" value={companyDataState.rfc}
          onChange={updateDataCompanyValue}/>
        </div>
      </div>
      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Régimen fiscal"
            value={companyDataState.regimenFiscal}
            onChange={updateDataCompanyValue}
          />
        </div>
        <div className="form-group col-auto">
          <input type="text" className="form-control" 
          placeholder="Industria" value={companyDataState.industria}
          onChange={updateDataCompanyValue}/>
        </div>
        <div className="form-group col-auto">
          <label>Fecha de constitución</label>
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de constitución"
            value={companyDataState.fechaConstitucion}
            onChange={updateDataCompanyValue}
          />
        </div>
      </div>
    </div>
  );
}
