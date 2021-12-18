import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Addressing(props) {

    const [companyAddressState, setCompanyAddress] = useState(props)

    const updateAddressValue = (event) => {
        setCompanyAddress(event.target.value)
    }

    return (
        <div>
            <h4>Company address</h4>
            <div className="form-group p-2">
                <input type="text" className="form-control" 
                    placeholder="Calle o Avenida" 
                    value={companyAddressState.calleAvenida}
                    onChange={updateAddressValue}
                />
            </div>
            <div className="row g-3 p-2">
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="No. Exterior"
                        value={companyAddressState.noExterior}
                        onChange={updateAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input type="number" className="form-control" 
                        placeholder="No. Interior" 
                        value={companyAddressState.noInterior}
                        onChange={updateAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Código postal"
                        value={companyAddressState.codigoPostal}
                        onChange={updateAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Colonia o Urbanización"
                        value={companyAddressState.colonia}
                        onChange={updateAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad o Población"
                        value={companyAddressState.ciudad}
                        onChange={updateAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Estado"
                        value={companyAddressState.estado}
                        onChange={updateAddressValue}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="País"
                        value={companyAddressState.pais}
                        onChange={updateAddressValue}
                    />
                </div>
            </div>
        </div>
    )
}