import { Fragment} from 'react';
import { useForm } from "react-hook-form";

export default function BancAccount(props) {    
    return (
        <Fragment>
            <h4>Cuenta de banco</h4>
            <div className="form-group p-2">
                <input
                    type="text" className="form-control" 
                    placeholder="CLAVE"
                    onChange={props.updateValueEvent}
                    name={props.claveBanco}
                    values={props.valueClaveBanco}
                    invalid={props.errorsClaveBanco && props.touchedClaveBanco}
                    onBlur={props.handleBlur}
                />
            </div>
            <span>{props.errorsClaveBanco}</span>
            <div className="form-group p-2">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Banco" 
                    onChange={props.updateValueEvent}
                    name={props.banco}
                    value={props.valueBanco}
                    invalid={props.errorsBanco && props.touchedBanco}
                    onBlur={props.handleBlur}
                />
            </div>
            <span>{props.errorsBanco}</span>
        </Fragment>
    )
}

