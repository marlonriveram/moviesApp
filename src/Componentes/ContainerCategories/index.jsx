import { Categories } from "../Cateories"

function ContainerCategories ({movies}) {
    return(
      <div className="conteiner-categories">
         {movies?.map((movie) =>(
              <Categories
              key={movie.name}
              titulo={movie.name}
              Url={movie.url}
              slug={movie.slug}
              
              />
            ))}
      </div>
    )
};

export {ContainerCategories}