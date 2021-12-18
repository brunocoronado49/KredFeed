import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function BancAccount(props) {

    const[bancAccountState, setBancAccountState] = useState(props)

    return (
        <div>
            <h4>Banc account</h4>
            <div className="form-group p-2">
                <input type="text" className="form-control" 
                placeholder="CLAVE" 
                value={bancAccountState.clave}/>
            </div>
            <div className="form-group p-2">
                <input type="text" className="form-control" 
                placeholder="Banco" 
                value={bancAccountState.banco}/>
            </div>
        </div>
    )
}
