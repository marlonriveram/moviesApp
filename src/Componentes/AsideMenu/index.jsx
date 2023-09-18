import {  NavLink } from "react-router-dom";
import { useContext } from 'react';
import { useWidthWindow } from "../../Hooks/WidthWindow";
import { FiX } from "react-icons/fi";
import { Context } from "../Contexto";
function AsideMenu () {
    const {isMobile} = useWidthWindow();
    const { isOpenAside,setIsOpenAside,} = useContext(Context);

    const clickClouse = () =>{
        setIsOpenAside(false);
    }

    const renderHamburguerMenu = () =>{
        return(
            <aside className={`bg-gray-300 w-full  flex justify-between p-3 absolute top-0 ${!isMobile && 'hidden'}`}>
            <ul className='flex flex-col gap-3'>
            <li>
                <NavLink
                    onClick={()=> clickClouse()}
                    to='/peliculas'
                >
                    Películas
                </NavLink>
                
            </li>
            <li>
                <NavLink
                    onClick={()=> clickClouse()}
                    to='/series-tv'
                >
                    Series Tv 
                </NavLink>
                
            </li>
            <li>
                <NavLink
                    onClick={()=> clickClouse()}
                    to='/actores'
                >
                    Actores   
                </NavLink>
                
            </li>

            <li>
                <NavLink
                    onClick={()=> clickClouse()}
                    to='/inicio-sesion'
                >
                    Iniciar Sesion
                </NavLink>
              
            </li>
            <li>
                <NavLink
                    onClick={()=> clickClouse()}
                    to='/buscador'
                >
                    🔍
                </NavLink>
                
            </li>
            <li>
                <NavLink
                    onClick={()=> clickClouse()}
                    to='/'
                >
                    😎 
                </NavLink>
                
            </li>
            </ul>
            <FiX 
                size={36}
                onClick={()=> clickClouse()}
            />

        </aside>
        )
    };

    return(
       <>{isOpenAside && renderHamburguerMenu()}</>
    )
};

export {AsideMenu}