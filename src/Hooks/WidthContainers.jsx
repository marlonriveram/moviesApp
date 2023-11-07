import { useContext, useEffect} from "react";
import { Context } from "../Componentes/Contexto";

function WidthContainer (containerCarouselRef) {
    
    const{containerCarouselWidth,setContainerCarouselWidth} = useContext(Context)
    useEffect(() =>{
        const observador = new ResizeObserver((entries) =>{  // ResizeObserver es para que cada vez que un contenedor cambie de tamaño observar
            setContainerCarouselWidth(entries[0].contentRect.width)
         
        });
       if(containerCarouselRef.current ){
        observador.observe(containerCarouselRef.current)
       }

       return () => {
        observador.disconnect();
    };
    },[])
    
    return {containerCarouselWidth}
}

export {WidthContainer}