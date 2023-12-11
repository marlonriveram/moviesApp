import { Navigate, Route, Routes } from "react-router-dom";
import { Peliculas } from "../paginas/Peliculas";
import { SeriesTv } from "../paginas/SeriesTv";
import { DetailView } from "../paginas/detailedView"
import { Actores } from "../paginas/Actores";
import { InicioSesion } from "../paginas/InicioSesion"
import { Buscador } from "../paginas/Buscador"
import { Perfiles } from "../paginas/Perfiles"
import { NotFound } from "../paginas/NotFound";
import { AllMovies } from "../Componentes/AllMovies";



function Enrutamiento () {
    return(
        <Routes>
            <Route path="/peliculas" 
            element ={ <Peliculas />}/>
            <Route path="/series-tv" 
            element ={<SeriesTv />}/>
            <Route path="/actores" 
            element ={<Actores />}/>
            <Route path="/inicio-sesion" 
            element ={<InicioSesion />}/>
            <Route path="/buscador" 
            element ={<Buscador />}/>
            <Route path="/" 
            element ={<Navigate to={'/peliculas'}/>}/>
            <Route path="/all-movies/:slug" 
            element ={<AllMovies/>}/>
            <Route path="/detail-View/:title" element = {<DetailView/>}/>
            <Route path="*" 
            element ={<NotFound />}/>
        </Routes>
    )
}

export {Enrutamiento}