import { useEffect, useState } from "react";

function useApiPelicula (urlPelicula,page = 1) {
  const [dataMovie,setDataMovie] = useState ([])
  useEffect(() =>{
    console.log('render')
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
          }
        };
        
        fetch(urlPelicula, options)
          .then(response => response.json())
          .then(data => setDataMovie(item => item.concat(data.results)))
          .catch(err => console.error(err));
  },[page])
    return{dataMovie}
};

export {useApiPelicula}