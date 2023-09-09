import { useEffect,useState } from "react";
import { Hero } from "../../Componentes/Hero"
import { Categories } from "../../Componentes/Categories"
import { SubCategorie } from "../../Componentes/SubCateories";

function Peliculas () {

    const [urlApiPeliculas,setUrlApiPeliculas] = useState (null);

    useEffect(() =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setUrlApiPeliculas(data.results))
            .catch(err => console.error(err));
    },[])

    console.log(urlApiPeliculas)

    const justnow = urlApiPeliculas;
    
    return(
        <>
        <Hero />
        <Categories>
          <SubCategorie 
          Url={justnow}
          titulo={'Justo Ahora'}
          />
          
        </Categories>
        </>
    )
};

export {Peliculas}