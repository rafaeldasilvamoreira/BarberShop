
import { Outlet } from 'react-router-dom'
import Logo from '../assets/logo.png'

export function LayoutPage() {

    return (
      <div className=" h-screen bg-[#121212] text-white">
        <div className="flex justify-between items-center h-18 px-10 bg-black text-white shadow-sm  shadow-[#004aad]">
            <img src={Logo} width={70} alt="" />
            <div className='flex gap-6 font-semibold'>
                <button className='hover:text-blue-500 duration-200 '>Barber Shop</button>            
                <button className='hover:text-blue-500 duration-200 '>Serviços</button>
                <button className='hover:text-blue-500 duration-200 '>Lista de Preços</button>
                <button className='hover:text-blue-500 duration-200 '>Contato</button>
            </div>
        </div>
        <div>
            <Outlet/>
        </div>
      </div>
    )
  }
  
  