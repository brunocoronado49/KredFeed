import { useForm } from 'react-hook-form';

export default function Addressing(props) {
    return (
        <div>
            <h4>Company address</h4>
            <div className="form-group p-2">
                <input type="text" className="form-control" placeholder="Calle o Avenida" />
            </div>
            <div className="row g-3 p-2">
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="No. Exterior"
                    />
                </div>
                <div className="form-group col-auto">
                    <input type="text" className="form-control" placeholder="No. Interior" />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Código postal"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Colonia o Urbanización"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad o Población"
                    />
                </div>
                <div className="form-group col-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Entidad Federativa o Estado"
                    />
                </div>
            </div>
            <div className="form-group p-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="País"
                />
            </div>
        </div>
    )
}