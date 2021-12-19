import { useForm } from 'react-hook-form';
import { Fragment } from 'react';

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
                />
            </div>
            <div className="row g-3 p-2">
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Número Telefónico"
                        onChange={props.updateValueEvent}
                        name={props.telefono}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        onChange={props.updateValueEvent}
                        name={props.correo}
                    />
                </div>
                <h5>Representante legal</h5>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        onChange={props.updateValueEvent}
                        name={props.nombre}
                    />
                </div>
                <div className="form-group col-auto">
                    <select 
                    name={props.genero}
                    className="form-control"
                    onChange={props.updateValueEvent}>
                        <option value="Genero">Genero</option>
                        <option value="Masculino" name={props.genero}>Masculino</option>
                        <option value="Femenino" name={props.genero}>Femenino</option>
                    </select>
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="País de nacimiento"
                        onChange={props.updateValueEvent}
                        name={props.paisNacimiento}
                    />
                </div>
                <div className="form-group col-auto">
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Fecha de nacimiento"
                        onChange={props.updateValueEvent}
                        name={props.fechaNacimiento}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Entidad federativa de nacimiento"
                        onChange={props.updateValueEvent}
                        name={props.entidadFederativa}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nacionalidad"
                        onChange={props.updateValueEvent}
                        name={props.nacionalidad}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CURP"
                        onChange={props.updateValueEvent}
                        name={props.curp}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="RFC"
                        onChange={props.updateValueEvent}
                        name={props.rfc}
                    />
                </div>
                <div className="form-group col-auto">
                <select 
                    name={props.estadoCivil}
                    className="form-control"
                    onChange={props.updateValueEvent}>
                        <option name={props.estadoCivil} value="Estado civil">Estado civil</option>
                        <option name={props.estadoCivil} value="Solter@">Solter@</option>
                        <option name={props.estadoCivil} value="Casad@">Casad@</option>
                        <option name={props.estadoCivil} value="Divorciad@">Divorciad@</option>
                        <option name={props.estadoCivil} value="Viud@">Viudo@</option>
                    </select>
                </div>
                <div className="form-group col-auto">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo"
                        onChange={props.updateValueEvent}
                        name={props.correoLegal}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Teléfono"
                        onChange={props.updateValueEvent}
                        name={props.telefonoLegal}
                    />
                </div>
                <div className="form-group col-auto">
                    <label>Documento de identificación</label>
                    <input
                        type="file"
                        className="form-control"
                        placeholder="Documento de identificación"
                        onChange={props.updateValueEvent}
                        name={props.documentoIdentificacion}
                    />
                </div>
            </div>
        </Fragment>
    )
}

