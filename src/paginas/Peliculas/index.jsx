import { Hero } from "../../Componentes/Hero"
import { ContainerCategories } from "../../Componentes/ContainerCategories";
import {movieCategory} from "../../dataMovies"

function Peliculas () {
    return(
        <>
        <Hero />
        <ContainerCategories movies={movieCategory} />
        </>
    )
};

export {Peliculas}