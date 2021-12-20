import { useForm } from "react-hook-form";
import { Fragment } from "react";

export default function UserData(props) {
  return (
    <Fragment>
      <h4>Datos de usuario</h4>
      <div className="form-group p-2">
        <label>Comprobante de domicilio</label>
        <input
          type="file"
          className="form-control"
          placeholder="Comprobante de domicilio"
          onChange={props.updateValueEvent}
          name={props.comprobanteDomicilio}
          value={props.valuescomprobanteDomicilio}
          onBlur={props.handleBlur}
        />
        <span className="text-danger">{props.errorscomprobanteDomicilio}</span>
      </div>

      <div className="row g-3 p-2">
        <div className="form-group col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Número Telefónico"
            onChange={props.updateValueEvent}
            name={props.telefono}
            value={props.valuestelefono}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorstelefono}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
            onChange={props.updateValueEvent}
            name={props.correo}
            value={props.valuescorreo}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorscorreo}</span>
        </div>

        <h5>Representante legal</h5>
        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            onChange={props.updateValueEvent}
            name={props.nombre}
            value={props.valuesnombre}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsnombre}</span>
        </div>

        <div className="form-group col-auto">
          <select
            name={props.genero}
            className="form-control"
            onChange={props.updateValueEvent}
            value={props.valuesgenero}
            onBlur={props.handleBlur}
          >
            <option value="Genero">Genero</option>
            <option value="Masculino" name={props.genero}>
              Masculino
            </option>
            <option value="Femenino" name={props.genero}>
              Femenino
            </option>
          </select>
          <span className="text-danger">{props.errorsgenero}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="País de nacimiento"
            onChange={props.updateValueEvent}
            name={props.paisNacimiento}
            value={props.valuespaisNacimiento}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorspaisNacimiento}</span>
        </div>

        <div className="form-group col-auto">
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de nacimiento"
            onChange={props.updateValueEvent}
            name={props.fechaNacimiento}
            value={props.valuesfechaNacimiento}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsfechaNacimiento}</span>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Entidad federativa de nacimiento"
            onChange={props.updateValueEvent}
            name={props.entidadFederativa}
            value={props.valuesentidadFederativa}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsentidadFederativa}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Nacionalidad"
            onChange={props.updateValueEvent}
            name={props.nacionalidad}
            value={props.valuesnacionalidad}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsnacionalidad}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="CURP"
            onChange={props.updateValueEvent}
            name={props.curp}
            value={props.valuescurp}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorscurp}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="RFC"
            onChange={props.updateValueEvent}
            name={props.rfc}
            value={props.valuesrfc}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorsrfc}</span>
        </div>

        <div className="form-group col-auto">
          <select
            name={props.estadoCivil}
            className="form-control"
            onChange={props.updateValueEvent}
            value={props.valuesestadoCivil}
            onBlur={props.handleBlur}
          >
            <option name={props.estadoCivil} value="Estado civil">
              Estado civil
            </option>
            <option name={props.estadoCivil} value="Solter@">
              Solter@
            </option>
            <option name={props.estadoCivil} value="Casad@">
              Casad@
            </option>
            <option name={props.estadoCivil} value="Divorciad@">
              Divorciad@
            </option>
            <option name={props.estadoCivil} value="Viud@">
              Viudo@
            </option>
          </select>
          <span className="text-danger">{props.errorsestadoCivil}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="email"
            className="form-control"
            placeholder="Correo"
            onChange={props.updateValueEvent}
            name={props.correoLegal}
            value={props.valuescorreoLegal}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorscorreoLegal}</span>
        </div>

        <div className="form-group col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Teléfono"
            onChange={props.updateValueEvent}
            name={props.telefonoLegal}
            value={props.valuestelefonoLegal}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">{props.errorstelefonoLegal}</span>
        </div>

        <div className="form-group col-auto">
          <label>Documento de identificación</label>
          <input
            type="file"
            className="form-control"
            placeholder="Documento de identificación"
            onChange={props.updateValueEvent}
            name={props.documentoIdentificacion}
            value={props.valuesdocumentoIdentificacion}
            onBlur={props.handleBlur}
          />
          <span className="text-danger">
            {props.errorsdocumentoIdentificacion}
          </span>
        </div>
      </div>
    </Fragment>
  );
}
