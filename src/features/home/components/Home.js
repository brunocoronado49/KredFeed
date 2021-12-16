import logo from '../../../assets/logo.png';
import '../style/home.css';

export default function Home(props) {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-7">
                    <img src={ logo } alt="logo" width={ 600 }/>
                </div>
                <div className="col-sm-5">
                    <h3>{ props.title }</h3>
                    <hr />
                    <p className="info-proyect">
                        El objetivo de este proyecto es realizar usando React, 
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