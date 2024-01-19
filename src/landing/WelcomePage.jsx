import {WelcomeNavbar} from './components/WelcomeNavbar'
import photo from '../assets/undraw-chat.svg'
import { FaCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <>
      <WelcomeNavbar />  
      <main className='mt-6 md:flex md:h-[calc(100vh-120px)]'>
        <div className='flex flex-col md:flex-1 md:m-auto'>
          <h1 className='text-wrap font-bold text-3xl mx-8 md:text-4xl lg:text-5xl md:mx-14'>SOCKET CHAT: Web de mensajeria en tiempo real.</h1>
          <p className='text-xs font-extralight text-wrap mx-8 md:mx-14 md:text-sm mt-1'>La mas rapida y segura para enviar mensajes online a tus amigos y conocidos.</p>
          <Link to='/auth/register' className='text-sm [letter-spacing:0.4px] px-4 py-2 mt-4 hover:bg-slate-950 transition-colors active:bg-white active:text-slate-900 border self-center rounded-full md:mt-7 md:text-base md:self-start md:mx-14'>CHATEAR YA</Link>
        </div>
        <div className='md:flex-1 md:m-auto'>
          <img src={photo} className='size-56 mx-auto mt-7 md:size-2/3' alt="Socket Chat Photo" />
        </div>
      </main>
     <footer className='p-2 bg-slate-950 mt-10'>
        <p className='font-extralight text-xs flex items-center justify-center gap-1'>2024 <FaCopyright /> Socket Chat INC.</p>
     </footer>
    </>
  )
}
