import { forwardRef,useState } from "react"
import { useUrlImagen } from "../../Hooks/UrlImagen";

const CardAllMovies = forwardRef ((prop,ref)=> {
    const [isHover,setIsHover] = useState(false)
    const urlImagen = useUrlImagen();
    return(
        <div 
            className='container-cards w-full h-80 flex flex-col cursor-pointer'
            onMouseEnter={()=> setIsHover(true)} // Evento para detectar cundo el mouse esta sobre la card
            onMouseLeave={()=>setIsHover(false)} // Evento para detectar cundo el mouse no esta sobre la card
        >
           <figure 
                className='h-full max-h-64 relative'
                ref={ref}
           >

           <img className=' image h-full object-cover rounded-lg'
           src={`${urlImagen?.secure_base_url}${urlImagen?.backdrop_sizes[1]}${prop.movie.backdrop_path}`} alt="" 
           />

            { <div className='text-content w-full h-full hover:bg-degradado transition-duration-2000 absolute top-0 rounded-lg text-slate-300 text-sm
            p-4 text-start'>
                {isHover && prop.movie.overview}
                </div>}
           </figure>
            <p className='title-movie'>{prop.movie.title}</p>
        </div>
    )
}) 

export {CardAllMovies}