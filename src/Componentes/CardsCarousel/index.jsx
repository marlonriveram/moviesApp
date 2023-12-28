import { useLocation, useNavigate } from 'react-router-dom';
import { useUrlImagen } from '../../Hooks/UrlImagen'
import './index.css'
function Card ({poster,title,dataMovie}){

    const navigate = useNavigate();
    const location = useLocation();
    const dataImagen = useUrlImagen();//hook para el tamaño y calidad de las imagenes
    const detailView = () =>{ // ir a la vista de detalles
        navigate(`/detail-View/${title}`,{ state:dataMovie });
    }

    const images = `${dataImagen?.secure_base_url}${dataImagen?.poster_sizes[5]}/${poster}`

    return(
        <div 
            className="card  "
            onClick={detailView}
        >
            <figure className="Container_img h-full ">
             <img className=' img-card rounded-lg' src={images}/> 
            </figure>
        </div>
    )
};

export {Card}