import { createContext } from "react";
import { useState } from "react";
const Context = createContext();

function Provider (prop){
    const [isOpenAside,setIsOpenAside] = useState(false);
   
    return(
    <Context.Provider
        value={{
            isOpenAside,
            setIsOpenAside,
        }}
    >
        {prop.children}
    </Context.Provider>
    )
};

export {Context,Provider}