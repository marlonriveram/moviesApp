import { useEffect, useRef, useState } from "react";
import { useApiPelicula } from "../../Hooks/ApiPeliculas";
import { CardAllMovies } from "../CardAllMovies"

function AllMovies () {
    const [page,setPage] = useState(1);
    const url =`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    const {dataMovie} = useApiPelicula(url,page)
    const lastItem = useRef(null)

 
    useEffect(()=>{
        if(page === 4) return
        const observer = new IntersectionObserver((entries,observador)=>{
            console.log(entries);
            if(entries[0].isIntersecting){
             setPage(item => item + 1)
            }
        },{
            rootMargin: '0px',
            threshold:0.75
        })

        if(lastItem.current && observer ) observer.observe(lastItem.current);

        return () =>{
            if(observer) observer.disconnect()
        }

    },[dataMovie])
    
    

    console.log(dataMovie)
      
    return(
        <>
             <div className='grid grid-cols-auto-fit auto-rows-auto gap-4 p-2'>
           
           {
               dataMovie?.map((item,index)=>(
                   <CardAllMovies 
                   key={item.id}
                   movies={item}
                   ref={index === dataMovie.length - 1 ? lastItem : null} //organizar 

                   />
               ))
               
           }
       </div>
       {<div className='flex justify-center'>... cargando peliculas</div>}
        </>
    )
};

export{AllMovies}