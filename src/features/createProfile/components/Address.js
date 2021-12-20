import { Fragment } from "react";

export default function Addressing(props) {
  return (
    <Fragment>
      <h4>Dirección de la compañia</h4>
      <div className="form-group p-2">
        <input
          type="text"
          className="form-control"
          placeholder="Calle o Avenida"
          onChange={props.updateValueEvent}
          name={props.calleCompany}
          value={props.valuesCalleCompany}
          onBlur={props.handleBlur}
        />
        <span className="text-danger">{props.errorsCalleCompany}</span>
      </div>

      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="No. Exterior"
            onChange={props.updateValueEvent}
            name={props.noExteriorCompany}
            value={props.valuesnoExteriorCompany}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsnoExteriorCompany}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="No. Interior"
            onChange={props.updateValueEvent}
            name={props.noInteriorCompany}
            value={props.valuesnoInteriorCompany}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsnoInteriorCompany}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Código postal"
            onChange={props.updateValueEvent}
            name={props.codigoPostalCompany}
            value={props.valuescodigoPostalCompany}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorscodigoPostalCompany}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Colonia o Urbanización"
            onChange={props.updateValueEvent}
            name={props.coloniaCompany}
            value={props.valuescoloniaCompany}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorscoloniaCompany}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad o Población"
            onChange={props.updateValueEvent}
            name={props.ciudadCompany}
            value={props.valuesciudadCompany}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsciudadCompany}</span>
        </div>

        <div className="form-group col-auto">
          <select
            className="form-control"
            onChange={props.updateValueEvent}
            name={props.estadoCompany}
            value={props.valuesestadoCompany}
            onBlur={props.handleBlur}
          >
            <option value="Estado">Estado</option>
            <option value="Ags">Aguascalientes</option>
            <option value="Jal">Jalisco</option>
            <option value="slp">San Luis Potosí</option>
            <option value="Zac">Zacatecas</option>
          </select>
          <span className="text-danger">{props.errorsestadoCompany}</span>
        </div>

        <div className="form-group col-auto">
          <select
            name={props.paisCompany}
            className="form-control"
            onChange={props.updateValueEvent}
            value={props.valuespaisCompany}
            onBlur={props.handleBlur}
          >
            <option value="País">País</option>
            <option value="México">México</option>
            <option value="EU">Estados Unidos</option>
            <option value="Canada">Canada</option>
          </select>
          <span className="text-danger">{props.errorspaisCompany}</span>
        </div>
      </div>
    </Fragment>
  );
}
