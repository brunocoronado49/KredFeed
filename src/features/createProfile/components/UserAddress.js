import { useForm } from 'react-hook-form';
import { Fragment} from 'react';

export default function USerAddresses(props) {
    return (
        <Fragment>
            <h4>Dirección de usuario</h4>
            <div className="form-group p-2">
                <input type="text" className="form-control" 
                placeholder="Calle o Avenida" 
                onChange={props.updateValueEvent}
                name={props.calle}/>
                
            </div>
            <div className="row g-3 p-2">
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="No. Exterior"
                        onChange={props.updateValueEvent}
                        name={props.noExterior}
                    />
                </div>
                <div className="form-group col-auto">
                    <input type="number" className="form-control" 
                    placeholder="No. Interior" 
                    onChange={props.updateValueEvent}
                    name={props.noInterior}/>
                </div>
                <div className="form-group col-auto">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Código postal"
                        onChange={props.updateValueEvent}
                        name={props.codigoPostal}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Colonia o Urbanización"
                        onChange={props.updateValueEvent}
                        name={props.colonia}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad o Población"
                        onChange={props.updateValueEvent}
                        name={props.ciudad}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Estado"
                        onChange={props.updateValueEvent}
                        name={props.estado}
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="País"
                        onChange={props.updateValueEvent}
                        name={props.pais}
                    />
                </div>
            </div>
        </Fragment>
    )
}

