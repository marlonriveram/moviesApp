import { useRoutes } from "react-router-dom";
import { Peliculas } from "../paginas/Peliculas";
import { SeriesTv } from "../paginas/SeriesTv";
import { Actores } from "../paginas/Actores";
import { InicioSesion } from "../paginas/InicioSesion"
import { Buscador } from "../paginas/Buscador"
import { Perfiles } from "../paginas/Perfiles"
import { NotFound } from "../paginas/NotFound";

const Rutas = () =>{
    let ruta = useRoutes ([
        {
            path:'/peliculas',
            element: <Peliculas />
        },
        {
            path:'/series-tv',
            element: <SeriesTv />
        },
        {
            path:'/actores',
            element: <Actores />
        },
        {
            path:'/inicio-sesion',
            element: <InicioSesion />
        },
        {
            path:'/buscador',
            element: <Buscador />
        },
        {
            path:'/',
            element: <Perfiles />
        },

        {
            path:'/*',
            element:<NotFound /> 
        },
    ])

    return ruta;
}
function Enrutamiento () {
    return(
        <Rutas />
    )
}

export {Enrutamiento}