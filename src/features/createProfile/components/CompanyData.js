import { Fragment } from 'react';
import { useForm} from 'react-hook-form';

export default function CompanyData(props) {
  return (
    <Fragment>
      <h4>Datos de la compañia</h4>
      <div className="form-group p-2">
        <input
          type="text"
          className="form-control"
          placeholder="Razón social"
          onChange={props.updateValueEvent}
          name={props.razonSocial}
        />
      </div>
      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre comercial"
            onChange={props.updateValueEvent}
            name={props.nombreComerial}
          />
        </div>
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nacionalidad"
            onChange={props.updateValueEvent}
            name={props.nacionalidadComapny}
          />
        </div>
        <div className="form-group col-auto">
          <input 
            type="text" className="form-control" 
            placeholder="RFC"
            onChange={props.updateValueEvent}
            name={props.rfcCompany}
          />
        </div>
      </div>
      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Régimen fiscal"
            onChange={props.updateValueEvent}
            name={props.regimenFiscal}
          />
        </div>
        <div className="form-group col-auto">
          <input 
            type="text" className="form-control" 
            placeholder="Industria"
            name={props.industria}
            onChange={props.updateValueEvent}
          />
        </div>
        <div className="form-group col-auto">
          <label>Fecha de constitución</label>
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de constitución"
            onChange={props.updateValueEvent}
            name={props.fechaConstitucion}
          />
        </div>
      </div>
    </Fragment>
  );
}
