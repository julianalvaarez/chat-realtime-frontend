import { useState } from "react"
import { loginWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { Link, useNavigate } from "react-router-dom"
import { FaGoogle } from "react-icons/fa";

export const LoginPage = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        const user = await loginWithEmailPassword(emailValue, passwordValue)
        if (user) navigate('/chat')
    }
  async function handleSignInWithGoogle() {
    const user = await signInWithGoogle()
    if (user) navigate('/chat')
  }

  return (
    <div className="h-screen md:flex md:justify-center md:items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-7  md:bg-gray-800 p-8 py-10 rounded-none md:rounded-lg w-screen md:w-auto">
        <div>
          <h3 className="text-2xl font-semibold">Iniciar sesión</h3>
          <p className="text-sm text-gray-400 mt-1">Ingresa tus credenciales para acceder a tu cuenta.</p>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-extralight text-sm">Correo</label>
            <input className="bg-gray-700 ml-1 p-2 rounded-md" id="email" required type="email" value={emailValue} onChange={({target}) => setEmailValue(target.value)} placeholder="Correo Electronico" />
          </div>
          <div className="flex flex-col mt-8 gap-2">
            <label htmlFor="password" className="font-extralight text-sm">Contraseña</label>
            <input className="bg-gray-700 ml-1 p-2 rounded-md" id="password" required type="password" value={passwordValue} onChange={({target}) => setPasswordValue(target.value)} placeholder="Contraseña" />
          </div>
        </div>
        <div className="mt-1 md:mt-7 flex flex-col md:flex-row gap-3 md:justify-between mx-1 md:items-center">
          <input type="submit" value='Iniciar sesión' className="bg-white text-gray-800 hover:bg-slate-300 active:bg-slate-900 active:text-white cursor-pointer px-3 py-2 rounded-lg font-semibold" />
          <button onClick={handleSignInWithGoogle} className="bg-white text-gray-800 font-semibold justify-center p-2 flex items-center gap-2 rounded-lg">Acceder con <FaGoogle /></button>
        </div>
        <p className="text-sm self-end">¿No tienes una cuenta? <Link to='/auth/register' className="underline" >Registrate aqui.</Link></p>
      </form>   
    </div>
  )
}
