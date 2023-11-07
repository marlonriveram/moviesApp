import { Hero } from "../../Componentes/Hero"
import { Categories } from "../../Componentes/Categories"
import { SubCategorie } from "../../Componentes/SubCateories";
import { category } from "../../dataMovies";

function Peliculas () {
    return(
        <>
        <Hero />
        <Categories>
          {
            category?.map((item) =>(
              <SubCategorie
              key={item.name}
              titulo={item.name}
              Url={item.url}
              slug={item.slug}
              />
            ))
          }
        </Categories>
        </>
    )
};

export {Peliculas}