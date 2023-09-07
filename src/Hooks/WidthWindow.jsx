import { useState,useContext} from "react";
import { asideContext } from "../Componentes/Contexto";


function useWidthWindow () {
    const [isMobile,setIsmobile] = useState( window.innerWidth <= 768);
   const {setIsOpenAside} = useContext(asideContext)
    window.addEventListener('resize',() =>{
        let width = window.innerWidth;
        setIsmobile(width <=768);
        setIsOpenAside(false);
    })

    return {isMobile};
};

export {useWidthWindow}