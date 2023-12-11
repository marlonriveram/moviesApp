import { Hero } from "../../Componentes/Hero"
import { ContainerCategories } from "../../Componentes/ContainerCategories";
import { urls} from "../../dataMovies";



function SeriesTv () {
    return(
        <>
        <Hero />
        <ContainerCategories movies={urls.tvSeriesCategory} />
        </>
    )
};

export {SeriesTv}