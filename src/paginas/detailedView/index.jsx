import { useLocation, useParams } from "react-router-dom";
import { useUrlImagen } from "../../Hooks/UrlImagen";
import "./style.css"
function DetailView () {

    const {title} = useParams();
    const location = useLocation();
    const dataImagen = useUrlImagen();

    const movieDetail = location.state.find(movie => (movie.title || movie.name) === title);
    
    const poster_path = `${dataImagen?.secure_base_url}${dataImagen?.backdrop_sizes[3]}/${movieDetail.backdrop_path}`
    return (
        <>
        <div className="backdrop_path">
            <img className="image_backdrop_path" src={poster_path} alt="" />
            <div className="container-info-detail">
                <div className="poster_path"> 
                    <img className="poster_path_image" src={movieDetail.poster_path} alt="" />
                </div>
                <div className="info-movie"> </div>
            </div>
        </div>
        </>
    )
};

export { DetailView }