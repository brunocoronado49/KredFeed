import { Fragment } from "react";

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
          value={props.valuesRazonSocial}
          onBlur={props.handleBlur}
        />
        <span className="text-danger">{props.errorsRazonSocial}</span>
      </div>

      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre comercial"
            onChange={props.updateValueEvent}
            name={props.nombreComerial}
            value={props.valuesNombreComercial}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsNombreComercial}</span>
        </div>
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nacionalidad"
            onChange={props.updateValueEvent}
            name={props.nacionalidadComapny}
            value={props.valuesNacionalidadCompany}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsNacionalidadComapny}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="RFC"
            onChange={props.updateValueEvent}
            name={props.rfcCompany}
            value={props.valuesRfcCompany}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsRfcCompany}</span>
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
            value={props.valuesRegimenFiscal}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsRegimenFiscal}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Industria"
            name={props.industria}
            onChange={props.updateValueEvent}
            value={props.valuesIndustria}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsIndustria}</span>
        </div>

        <div className="form-group col-auto">
          <label>Fecha de constitución</label>
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de constitución"
            onChange={props.updateValueEvent}
            name={props.fechaConstitucion}
            value={props.valuesFechaConstitucion}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsFechaConstitucion}</span>
        </div>
      </div>
    </Fragment>
  );
}
