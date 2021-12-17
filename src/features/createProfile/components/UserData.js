import { useForm } from 'react-hook-form';

export default function UserData(props) {
    return (
        <div>
            <h4>User data</h4>
            <div className="form-group p-2">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Comprobante de domicilio"
                />
            </div>
            <div className="row g-3 p-2">
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Número Telefónico"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Correo electrónico"
                    />
                </div>
                <hr />
                <h5>Representante legal</h5>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Género"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Fecha de nacimiento"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="País de nacimiento"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Entidad federativa de nacimiento"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="País de nacimiento"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nacionalidad"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CURP"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="RFC"
                    />
                </div>
            </div>
        </div>
    )
}

