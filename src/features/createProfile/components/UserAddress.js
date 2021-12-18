import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function USerAddresses(props) {

    const [userAddressState, setUserAddressState] = useState(props);

    const updateUSerAddressValue = (event) => {
        setUserAddressState(event.target.value)
    }

    return (
        <div>
            <h4>User address</h4>
            <div className="form-group p-2">
                <input type="text" className="form-control" 
                placeholder="Calle o Avenida" />
                value={userAddressState.calle}
                onChange={updateUSerAddressValue}
            </div>
            <div className="row g-3 p-2">
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="No. Exterior"
                        value={userAddressState.noExterior}
                        onChange={updateUSerAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input type="number" className="form-control" 
                    placeholder="No. Interior" />
                    value={userAddressState.noInterior}
                    onChange={updateUSerAddressValue}
                </div>
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Código postal"
                        value={userAddressState.codigoPostal}
                        onChange={updateUSerAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Colonia o Urbanización"
                        value={userAddressState.colonia}
                        onChange={updateUSerAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad o Población"
                        value={userAddressState.ciudad}
                        onChange={updateUSerAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Estado"
                        value={userAddressState.estado}
                        onChange={updateUSerAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="País"
                        value={userAddressState.pais}
                        onChange={updateUSerAddressValue}
                    />
                </div>
            </div>
        </div>
    )
}

