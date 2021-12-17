import logo from '../../../assets/logo.svg';
import '../style/home.css';

export default function Home() {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-7">
                    <img src={ logo } alt="logo" width={ 600 }/>
                </div>
                <div className="col-sm-5">
                    <h3>Proyecto React</h3>
                    <hr />
                    <p className="info-proyect">
                        El objetivo de este proyecto es realizar (con React) 
                        un formulario con datos de usuarios,
                        organizarlos de una manera que resulte comoda y de una 
                        buena experiencia para el usuario final.
                        Se va a calificar la manera de organizar información, 
                        la validación de datos, y estructura del código.
                    </p>
                </div>
            </div>
        </div>
    )
}