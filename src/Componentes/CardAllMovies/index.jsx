import { forwardRef,useState } from "react"
import { useUrlImagen } from "../../Hooks/UrlImagen";
import { useNavigate } from "react-router-dom";

const CardAllMovies = forwardRef ((prop,ref)=> {
    const [isHover,setIsHover] = useState(false)
    const navigate = useNavigate();
    
    const urlImagen = useUrlImagen();
    const images = `${urlImagen?.secure_base_url}${urlImagen?.backdrop_sizes[1]}${prop.movie?.backdrop_path}`;
    
    const detailView = () =>{
        navigate(`/detail-View/${prop.movie.title}`,{ state: prop.dataMovie  })
    }

    return(
        <div 
            className='container-cards w-full h-96 flex flex-col cursor-pointer'
            onMouseEnter={()=> setIsHover(true)} // Evento para detectar cundo el mouse esta sobre la card
            onMouseLeave={()=>setIsHover(false)} // Evento para detectar cundo el mouse no esta sobre la card
            onClick={detailView}
        >
           <figure 
                className='h-full  relative'
                ref={ref}
           >

           <img className=' image h-full object-cover rounded-lg'
           src={images} alt="" 
           />

            { <div className='text-content w-full h-full hover:bg-degradado transition-duration-2000 absolute top-0 rounded-lg text-slate-300 text-sm
            p-4 text-start'>
                {isHover && prop.movie.overview}
                </div>}
           </figure>
            <p className='title-movie'>{prop.movie.title ||prop.movie.name}</p>
        </div>
    )
}) 

export {CardAllMovies}