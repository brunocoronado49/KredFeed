import { useForm } from "react-hook-form";
import { useState, Fragment} from 'react';

export default function BancAccount(props) {
    return (
        <Fragment>
            <h4>Cuenta de banco</h4>
            <div className="form-group p-2">
                <input type="text" className="form-control" 
                placeholder="CLAVE" 
                onChange={props.updateValueEvent}
                name={props.claveBanco}/>
            </div>
            <div className="form-group p-2">
                <input type="text" className="form-control" 
                placeholder="Banco" 
                onChange={props.updateValueEvent}
                name={props.banco}/>
            </div>
        </Fragment>
    )
}
