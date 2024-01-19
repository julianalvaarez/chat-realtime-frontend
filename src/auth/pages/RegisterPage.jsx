import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUserWithEmailPassword } from "../../firebase/providers"

export const RegisterPage = () => {
    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [usernameValue, setUsernameValue] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const user = await registerUserWithEmailPassword(emailValue, passwordValue, usernameValue)
        if (user) navigate('/chat')
    }

  return (
    <>
    <div className="h-screen md:flex md:justify-center md:items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-7  md:bg-gray-800 p-8 py-10  rounded-none md:rounded-lg w-screen md:w-auto">
        <div>
          <h3 className="text-2xl font-semibold">Registrarse</h3>
          <p className="text-sm text-gray-400 mt-1">Ingresa tus credenciales para crear una cuenta.</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-extralight text-sm">Correo</label>
            <input className="bg-gray-700 ml-1 p-2 rounded-md" id="email" required type="email" value={emailValue} onChange={({target}) => setEmailValue(target.value)} placeholder="Correo Electronico" />
          </div>
          <div className="flex flex-col mt-8 gap-2">
            <label htmlFor="password" className="font-extralight text-sm">Contraseña</label>
            <input className="bg-gray-700 ml-1 p-2 rounded-md" id="password" required type="password" value={passwordValue} onChange={({target}) => setPasswordValue(target.value)} placeholder="Contraseña" />
          </div>
          <div className="flex flex-col mt-8 gap-2">
            <label htmlFor="username" className="font-extralight text-sm">Nombre de usuario</label>
            <input className="bg-gray-700 ml-1 p-2 rounded-md" id="username" required type="text" value={usernameValue} onChange={({target}) => setUsernameValue(target.value)} placeholder="Nombre de usuario" />
          </div>
        </div>
        <div className="mt-3 mx-1">
          <input type="submit" value='Registrarse' className="bg-white text-gray-800 w-full md:w-auto hover:bg-slate-300 active:bg-slate-900 active:text-white cursor-pointer px-3 py-2 rounded-lg font-semibold" />
        </div>
        <p className="text-sm self-end">¿Ya tienes una cuenta? <Link to='/auth/login' className="underline" >Accede aqui.</Link></p>
      </form>   
    </div>
    </>
  )
}
