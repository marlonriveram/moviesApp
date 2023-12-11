import { Hero } from "../../Componentes/Hero"
import { ContainerCategories } from "../../Componentes/ContainerCategories";
import {urls} from "../../dataMovies"
import { useTokenAuth } from "../../Hooks/TokenAuth";

function Peliculas () {
   

    return(
        <>
        <Hero />
        <ContainerCategories movies={urls.movieCategory} />
        </>
    )
};

export {Peliculas}