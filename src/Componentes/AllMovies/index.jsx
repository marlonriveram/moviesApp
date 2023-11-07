import { useEffect, useRef, useState } from "react";
import { useApiPelicula } from "../../Hooks/ApiPeliculas";
import { CardAllMovies } from "../CardAllMovies"
import { useParams } from "react-router-dom";
import { category } from "../../dataMovies";


function AllMovies () {
    // states
    const [page,setPage] = useState(1);
    // refs
    const lastItem = useRef(null);
    // params
    const {slug} = useParams();
    //-------------------------------------------

    const urlCaterory = category.find(dataMovie => dataMovie.slug === slug);
    let endpointCategory = urlCaterory.slug;

    const url = (`https://api.themoviedb.org/3/movie/${endpointCategory}?language=en-US&page=${page}`)
    const {dataMovie} = useApiPelicula(url,page)
    // observar el ultimo elemento de datamovie

    useEffect(()=>{
        if(page === 4) return
            const observer = new IntersectionObserver((entries,observador)=>{
            if(entries[0].isIntersecting){
            setPage(item => item+1)
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

    return(
        <>
             <div className='grid grid-cols-auto-fit auto-rows-auto gap-4 p-2'>
                {    dataMovie?.map((item,index)=>(
                   <CardAllMovies 
                   key={item.id}
                   movies={item}
                   ref={index === dataMovie.length - 1 ? lastItem : null}
                   />))}
       </div>
           <div>Cargando ...</div>
        </>
    )
};

export{AllMovies}