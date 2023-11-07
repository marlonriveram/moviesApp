import { useContext, useState} from "react"

import { Link } from "react-router-dom";
import { Carousel } from "../Carousel";
import { Context } from "../Contexto";


function SubCategorie ({Url,titulo,slug}){
 
    // const {setUrlAllMovies} = useContext (Context);
  
    return(
   <div className='container-subcategoria'>
       <div className='title py-1 px-14 flex justify-between'>
       <h2 className='text-2xl font-extralight '>{titulo}</h2>
        
            <Link
                // onClick={()=>{setUrlAllMovies(Url)}}
                to= {`/all-movies/${urlSlug}`}>
            <p className='cursor-pointer font-semibold'>see all</p>
            </Link>
       </div>
         <div className='subcategoria  flex items-center relative '>
          <Carousel 
            url={Url}
          />
        </div>
   </div>
    )
};

export{SubCategorie}

