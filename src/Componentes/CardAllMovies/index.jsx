import { forwardRef,useState } from "react"

const CardAllMovies = forwardRef ((prop,ref)=> {
    const [isHover,setIsHover] = useState(false)

    return(
        <div className='container-cards w-full h-80 flex flex-col cursor-pointer'
            onMouseEnter={()=> setIsHover(true)}
            onMouseLeave={()=>setIsHover(false)}
           
        >
           <figure className='h-full max-h-64 relative'
           ref={ref}
           >
           <img className=' h-full object-cover rounded-lg'
           src={`https://image.tmdb.org/t/p/original${prop.movies.backdrop_path}`} alt="" />

            { <div className='w-full h-full hover:bg-degradado transition-duration-2000 absolute top-0 rounded-lg text-slate-300 text-sm
            p-4 text-start'>
                {prop.movies.overview}
                </div>}
           </figure>
            <p>{prop.movies.title}</p>
        </div>
    )
}) 

export {CardAllMovies}