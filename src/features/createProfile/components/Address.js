import { useForm } from 'react-hook-form';
import { Fragment } from 'react'

export default function Addressing(props) {
    return (
        <Fragment>
            <h4>Dirección de la compañia</h4>
            <div className="form-group p-2">
                <input type="text" className="form-control" 
                    placeholder="Calle o Avenida" 
                    onChange={props.updateValueEvent}
                    name={props.calleCompany}
                    value={props.valuesCalleCompany}
                    onBlur={props.handleBlur}
                />
            </div>
            <span className="text-danger">{props.errorsCalleCompany}</span>
            <div className="row g-3 p-2">
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="No. Exterior"
                        onChange={props.updateValueEvent}
                        name={props.noExteriorCompany}
                        value={props.valuesCalleCompany}
                        onBlur={props.handleBlur}
                    />
                </div>
                <span className="text-danger">{props.errorsCalleCompany}</span>
                <div className="form-group col-auto">
                    <input type="number" className="form-control" 
                        placeholder="No. Interior" 
                        onChange={props.updateValueEvent}
                        name={props.noInteriorCompany}
                        value={props.valuesCalleCompany}
                        onBlur={props.handleBlur}
                    />
                </div>
                <span className="text-danger">{props.errorsCalleCompany}</span>
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Código postal"
                        onChange={props.updateValueEvent}
                        name={props.codigoPostalCompany}
                        value={props.valuesCalleCompany}
                        onBlur={props.handleBlur}
                    />
                </div>
                <span className="text-danger">{props.errorsCalleCompany}</span>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Colonia o Urbanización"
                        onChange={props.updateValueEvent}
                        name={props.coloniaCompany}
                        value={props.valuesCalleCompany}
                        onBlur={props.handleBlur}
                    />
                </div>
                <span className="text-danger">{props.errorsCalleCompany}</span>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad o Población"
                        onChange={props.updateValueEvent}
                        name={props.ciudadCompany}
                        value={props.valuesCalleCompany}
                        onBlur={props.handleBlur}
                    />
                </div>
                <span className="text-danger">{props.errorsCalleCompany}</span>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Estado"
                        onChange={props.updateValueEvent}
                        name={props.estadoCompany}
                        value={props.valuesCalleCompany}
                        onBlur={props.handleBlur}
                    />
                </div>
                <span className="text-danger">{props.errorsCalleCompany}</span>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="País"
                        onChange={props.updateValueEvent}
                        name={props.paisCompany}
                        value={props.valuesCalleCompany}
                        onBlur={props.handleBlur}
                    />
                </div>
                <span className="text-danger">{props.errorsCalleCompany}</span>
            </div>
        </Fragment>
    )
}