import { useContext, useState} from "react"
import { Link } from "react-router-dom";
import { Carousel } from "../Carousel";
import { Context } from "../Contexto";


function Categories ({Url,titulo,slug}){
    // const {setUrlAllMovies} = useContext (Context)
    return(
      <div className='categorie'>
        <div className='header-categorie py-1 px-14 flex justify-between'>
          <h2 className='title-categorie text-2xl font-extralight '>{titulo}</h2>
          <Link
            // onClick={()=>{setUrlAllMovies(Url)}}
            to= {`/all-movies/${slug}`}>
            <p className='more-categories cursor-pointer font-semibold'>see all</p>
          </Link>
        </div>
        <Carousel url={Url}/>
        
   </div>
   )};

export{ Categories }

