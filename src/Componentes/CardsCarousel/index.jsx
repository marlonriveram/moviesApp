import { useUrlImagen } from '../../Hooks/UrlImagen'
import './index.css'
function Card ({Url}){
 
    const urlImagen = useUrlImagen();
    return(
        <div className="card ">
            <figure className="Container_img ">
             <img className=' img-card  object-contain rounded-lg' src={`${urlImagen?.secure_base_url}${urlImagen?.backdrop_sizes[1]}/${Url}`}/>
            </figure>
        </div>
    )
};

export {Card}