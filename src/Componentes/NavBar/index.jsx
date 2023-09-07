import {  NavLink } from "react-router-dom";
import { useContext } from 'react';
import { asideContext } from "../Contexto";
import { useWidthWindow } from "../../Hooks/WidthWindow";
import { FaBars } from "react-icons/fa";


function NavBar () {
    const {isMobile} = useWidthWindow();
    const {setIsOpenAside} = useContext(asideContext);
    const clickOpen = () =>{
        setIsOpenAside(true)
    }

    const renderDesktop = () =>{
    return(
        <>
        <ul className='flex gap-9'>
            <li>
                <NavLink
                    to='/peliculas'
                >
                    Películas
                </NavLink>
                
            </li>
            <li>
                <NavLink
                    to='/series-tv'
                >
                    Series Tv 
                </NavLink>
                
            </li>
            <li>
                <NavLink
                    to='/actores'
                >
                    Actores   
                </NavLink>
                
            </li>
        </ul>
        
        <ul className='flex gap-9'>
            <li>
                <NavLink
                    to='/inicio-sesion'
                >
                    Iniciar Sesion
                </NavLink>
              
            </li>
            <li>
                <NavLink
                    to='/buscador'
                >
                    🔍
                </NavLink>
                
            </li>
            <li>
                <NavLink
                    to='/'
                >
                    😎 
                </NavLink>
                
            </li>
        </ul>
        </>
    )
    };
    const renderMobile = () =>{
    return(
        <FaBars
        onClick={()=>clickOpen()}
        size={30}
        className='cursor-pointer'
        />
    )
  }
    return(
        <nav className=' flex justify-between items-center p-3'>
            {!isMobile ? renderDesktop(): renderMobile()}
        </nav>
    )
};

export {NavBar};