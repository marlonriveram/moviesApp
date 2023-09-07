import { createContext, useContext } from "react";
import { useState } from "react";
const asideContext = createContext();

function Provider (prop){
    const [isOpenAside,setIsOpenAside] = useState(false)
    return(
    <asideContext.Provider
        value={{
            isOpenAside,
            setIsOpenAside,
        }}
    >
        {prop.children}
    </asideContext.Provider>
    )
};

export {asideContext,Provider}