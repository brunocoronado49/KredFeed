import { Fragment } from "react";

export default function USerAddresses(props) {
  return (
    <Fragment>
      <h4>Dirección de usuario</h4>
      <div className="form-group p-2">
        <input
          type="text"
          className="form-control"
          placeholder="Calle o Avenida"
          onChange={props.updateValueEvent}
          name={props.calle}
          value={props.valuescalle}
          onBlur={props.handleBlur}
        />
        <span className="text-danger">{props.errorscalle}</span>
      </div>

      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="No. Exterior"
            onChange={props.updateValueEvent}
            name={props.noExterior}
            value={props.valuesnoExterior}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsnoExterior}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="No. Interior"
            onChange={props.updateValueEvent}
            name={props.noInterior}
            value={props.valuesnoInterior}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsnoInterior}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Código postal"
            onChange={props.updateValueEvent}
            name={props.codigoPostal}
            value={props.valuescodigoPostal}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorscodigoPostal}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Colonia o Urbanización"
            onChange={props.updateValueEvent}
            name={props.colonia}
            value={props.valuescolonia}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorscolonia}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad o Población"
            onChange={props.updateValueEvent}
            name={props.ciudad}
            value={props.valuesciudad}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsciudad}</span>
        </div>

        <div className="form-group col-auto">
          <select 
            className="form-control"  
            onChange={props.updateValueEvent}
            name={props.estado}
            value={props.valuesestado}
            onBlur={props.handleBlur}
          >
            <option value="Estado">Estado</option>
            <option value="Ags">Aguascalientes</option>
            <option value="Jal">Jalisco</option>
            <option value="slp">San Luis Potosí</option>
            <option value="Zac">Zacatecas</option>
          </select>
          <span className="text-danger">{props.errorsestado}</span>
        </div>

        <div className="form-group col-auto">
          <select 
              name={props.pais}
              className="form-control"
              onChange={props.updateValueEvent}
              value={props.valuespais}
              onBlur={props.handleBlur}
            >
              <option value="País">País</option>
              <option value="México">México</option>
              <option value="EU">Estados Unidos</option>
              <option value="Canada">Canada</option>
          </select>
          <span className="text-danger">{props.errorspais}</span>
        </div>
      </div>
    </Fragment>
  );
}
