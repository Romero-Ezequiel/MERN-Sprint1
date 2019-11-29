import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css';


class SectionCreateAccount extends React.Component {
    render() {
        return (
            //Creo un formulario para registrarse con la clase formulario para darle estilo
                <form className="formulario">
                    <h1 className="titulo">Registrate</h1>
                    <div className="contenedor">
                        
                        <div className="input-contenedor" >
                            <i className="fas fa-user icon">
                                <input type="text" placeholder="Nombre Completo" />
                            </i>
                        </div>

                        <div className="input-contenedor">
                            <i className="fas fa-envelope icon">
                                <input type="text" placeholder="Correo Electronico"/>
                            </i>    
                        </div>

                        <div className="input-contenedor">
                            <i className="fas fa-key icon">
                                <input type="password" placeholder="Contraseña" />
                            </i>
                        </div>

                        <input type="submit" value="Registrate" className="button"/>

                        <p className="text-formulario" >Al registrarte, aceptas muestras condiciones de uso y politica de privacidad</p>
                        <p className="text-formulario">¿Ya tienes una cuenta? 
                        <Link className="link" to={'./login'}> Iniciar sesión </Link></p>

                    </div>
                </form>
        );
    }
}

export default SectionCreateAccount;