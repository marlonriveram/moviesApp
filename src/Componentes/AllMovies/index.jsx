import { useEffect, useRef, useState } from "react";
import { useApiPelicula } from "../../Hooks/ApiPeliculas";
import { CardAllMovies } from "../CardAllMovies"
import { useLocation, useParams } from "react-router-dom";
import { urls} from "../../dataMovies";


function AllMovies () {
    // states
    const [page,setPage] = useState(1);
    // refs
    const lastItem = useRef(null);
    // params
    const {slug} = useParams();
    //-------------------------------------------

    // const location = useLocation()

    const urlMovie = urls.movieCategory.find(dataMovie => dataMovie.slug === slug);
    const urlTvSerie = urls.tvSeriesCategory.find(dataMovie => dataMovie.slug === slug);
    let endpointCategory;
    let url='';
    if(urlMovie){
        endpointCategory= urlMovie.slug;
        url = `https://api.themoviedb.org/3/movie/${endpointCategory}?language=en-US&page=${page}`
    }else if(urlTvSerie){
        endpointCategory= urlTvSerie.slug;
        url = `https://api.themoviedb.org/3/tv/${endpointCategory}?language=en-US&page=${page}`
    }
   
    const {dataMovie} = useApiPelicula(url,page)
    // observar el ultimo elemento de datamovie
  
    useEffect(()=>{  // quitarr de aquí a futuro
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
                {    dataMovie?.map((movie,index)=>(
                   <CardAllMovies 
                   key={movie.id}
                   movie={movie}
                   ref={index === dataMovie.length - 1 ? lastItem : null}
                   dataMovie={dataMovie}
                   />))}
       </div>
           <div>Cargando ...</div>
        </>
    )
};

export{AllMovies}