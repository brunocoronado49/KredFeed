import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function UserData(props) {

    const [userDataState, setUserDataState] = useState(props);

    const updateUserDataValue = (event) => {
        setUserDataState(event.target.value)
    }

    return (
        <div>
            <h4>User data</h4>
            <div className="form-group p-2">
                <label>Comprobante de domicilio</label>
                <input 
                    type="file"
                    className="form-control"
                    placeholder="Comprobante de domicilio"
                    value={userDataState.comprobanteDomicilio}
                    onChange={updateUserDataValue}
                />
            </div>
            <div className="row g-3 p-2">
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Número Telefónico"
                        value={userDataState.telefono}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        value={userDataState.correo}
                        onChange={updateUserDataValue}
                    />
                </div>
                <h5>Representante legal</h5>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        value={userDataState.nombre}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Género"
                        value={userDataState.genero}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="País de nacimiento"
                        value={userDataState.paisNacimiento}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Fecha de nacimiento"
                        value={userDataState.fechaNacimiento}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Entidad federativa de nacimiento"
                        value={userDataState.entidadFederativa}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nacionalidad"
                        value={userDataState.nacionalidad}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CURP"
                        value={userDataState.curp}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="RFC"
                        value={userDataState.rfc}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Estado civil"
                        value={userDataState.estadoCivil}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo"
                        value={userDataState.correo}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Teléfono"
                        value={userDataState.telefono}
                        onChange={updateUserDataValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <label>Documento de identificación</label>
                    <input
                        type="file"
                        className="form-control"
                        placeholder="Documento de identificación"
                        value={userDataState.documentoIdentificacion}
                        onChange={updateUserDataValue}
                    />
                </div>
            </div>
        </div>
    )
}

