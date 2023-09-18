import { useApiPelucula } from "../../Hooks/ApiPeliculas";
import { CardsAllMovies } from "../CardsaAllMovies"

function AllMovies () {

    const page = 2;
    const url=`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`

    const {urlApiPelicula}= useApiPelucula(url)
    return(
        <div className='container-all-movies w-full '>
            <div className='contaier-cards-all-movies grid grid-cols-auto-fit gap-4 w-11/12 mx-auto'>
                {
                    urlApiPelicula?.map((item) =>(
                        <CardsAllMovies />
                    ))
                }
            </div>
        </div>
    )
};

export {AllMovies}