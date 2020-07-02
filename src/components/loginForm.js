/*Componente inicio de sesión  */
import React from "react";
/* importamos Hook useForm de RHF */
import { useForm } from "react-hook-form";
// get our fontawesome imports
/* Aquí declaramos los iconos que vamos a usar. */
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
/* Declaramos el componente en react que desplegará el icono elegido previamente */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  /* destructuramos lo que nos ofrece useForm:
    register: registra los componentes que vigilará useForm por medio del "ref".
    handleSubmit: función que maneja por default useForm del submit
    error: captura errores por defaqult de useForm */

  const onSubmit = (data) => {
    /* función que trata a los datos del formulario al hacer submit */
    console.log(data);
  };
  return (
    
      <div className="card">
        <div className="card-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="control has-icons-left">
              <input
                className="input is-link is-medium my-3"
                name="email"
                type="text"
                placeholder="Correo electrónico"
                ref={register({
                  required: "Correo electrónico obligatorio",
                  minLength: { value: 3, message: "correo demasiado corto" },
                })}
              />
              <span className="icon is-small is-left mt-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            {errors.email && (
              <p className="help is-danger">{errors.email.message}</p>
            )}
            <div className="control has-icons-left">
              <input
                className="input is-link is-medium my-3"
                name="password"
                type="password"
                placeholder="Contraseña"
                ref={register({
                  required: "Contraseña obligatoria",
                  minLength: { value: 3, message: "contraseña demasiado corta" },
                })}
              />
              <span className="icon is-small is-left mt-3">
                <FontAwesomeIcon icon={faKey} />
              </span>
            </div>
            {errors.password && (
              <p className="help is-danger">{errors.password.message}</p>
            )}
            <input type="submit" className="button is-link is-medium my-3 is-fullwidth" />
          </form>
        </div>
      </div>
    
  );
}

export default Login;
