import { createContext, useRef } from "react";
import { useState } from "react";
const Context = createContext();

function Provider (prop){
    const [isOpenAside,setIsOpenAside] = useState(false);
    const [containerCarouselWidth,setContainerCarouselWidth] = useState(0);
    
    return(
    <Context.Provider
        value={{
            isOpenAside,
            setIsOpenAside,
            containerCarouselWidth,
            setContainerCarouselWidth,
        }}
    >
        {prop.children}
    </Context.Provider>
    )
};

export {Context,Provider}