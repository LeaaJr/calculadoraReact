import React from "react"
import logoflmr from '../imagenes/logolmr-preview.png'

function LogoFreecodecamp(){
    return(
        <div className='freecodecamp-logo-contenedor'>
            <img className='freecodecamp-logo' src={logoflmr}  alt='Logo de FreeCodeCamp'/>
        </div>
        )
}

export default LogoFreecodecamp
