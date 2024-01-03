import {  NavLink } from "react-router-dom";
import { useContext } from 'react';
import { useWidthWindow } from "../../Hooks/WidthWindow";
import { FaBars } from "react-icons/fa";
import { Context } from "../Contexto";
import "./style.css"


function NavBar () {
    const {isMobile} = useWidthWindow();
    const {setIsOpenAside} = useContext(Context);
    const clickOpen = () =>{
        setIsOpenAside(true)
    }

    const renderDesktop = () =>{
    return(
        <>
        <ul className='categoire navbar-items '>
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
        
        <ul className='login flex navbar-items'>
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
        <nav className='navbar'>
            {!isMobile ? renderDesktop(): renderMobile()}
        </nav>
    )
};

export {NavBar};