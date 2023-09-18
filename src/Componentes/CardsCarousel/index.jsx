import { useRef } from 'react';
import './index.css'
function Card ({Url}){

    const cardWidthRef = useRef(null);
    // const cardWidth = 
    return(
        <div className="card w-40 h-28 flex items-center ">
            <figure 
            // style={stylesCard}
            className="Container_img ">
             <img className=' img-card  object-contain rounded-lg' src={`https://image.tmdb.org/t/p/w1280/${Url}`}/>
            </figure>
        </div>
    )
};

export {Card}