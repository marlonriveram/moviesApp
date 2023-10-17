import { Hero } from "../../Componentes/Hero"
import { Categories } from "../../Componentes/Categories"
import { SubCategorie } from "../../Componentes/SubCateories";


function Peliculas () {
  console.log('gdgsdgsgsg')
  const page = 2;
  const category = [
    {name:'Now Playing',url:`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`},
    {name:'Popular',url:'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'},
    {name:'Top Rated',url:'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'},
    {name:'UpComing',url:'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'},

  ];
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
              />
            ))
          }
        </Categories>
        </>
    )
};

export {Peliculas}