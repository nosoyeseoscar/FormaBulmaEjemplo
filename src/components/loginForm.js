/*Componente inicio de sesión  */
import React from 'react'
/* importamos Hook useForm de RHF */
import {useForm} from "react-hook-form"

function Login() {
    const {register, handleSubmit, errors} = useForm()
    /* destructuramos lo que nos ofrece useForm:
    register: registra los componentes que vigilará useForm por medio del "ref".
    handleSubmit: función que maneja por default useForm del submit
    error: captura errores por defaqult de useForm */

    const onSubmit= (data) =>{
        /* función que trata a los datos del formulario al hacer submit */
        console.log(data);
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <label htmlFor="login">Login</label> */}
            <input
                name="email"
                type="text"
                placeholder="Correo electrónico"
                ref={register({required:"Correo electrónico obligatorio", minLength:{value:3, message:"correo demasiado corto"} })}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
                name="password"
                type="password"
                placeholder="Contraseña"
                ref={register({required:"Contraseña obligatoria", minLength:{value:3, message:"contraseña demasiado corta"}})}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input type="submit"/>

        </form>
    )
}

export default Login
