import { useEffect, useRef, useState } from 'react'
import { useApiPelicula } from '../../Hooks/ApiPeliculas'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Card } from '../CardsCarousel'

import './index.css'
import { WidthContainer } from '../../Hooks/WidthContainers';
function Carousel ({url}) {

    const [page,setPage] = useState(1);
    const containerCarouselRef = useRef(null);
    const {dataMovie} = useApiPelicula(url,page);
    const {containerCarouselWidth} = WidthContainer(containerCarouselRef);


    const moveLeft = () =>{
        if (containerCarouselRef.current) {
            containerCarouselRef.current.scrollLeft -= containerCarouselWidth;
        }
    }

    const moveRight = () =>{
        if (containerCarouselRef.current) {
            containerCarouselRef.current.scrollLeft += containerCarouselWidth;
        }
    }

    return(
        <div className='subcategoria  flex items-center relative overflow-hidden '>
           <AiOutlineLeft
           onClick={() => moveLeft()}
           className=' cursor-pointer bg-transparent' size={120}  />
        <div
        
        ref={containerCarouselRef}
        className='container-carousel overflow-hidden '>
                <div className="carousel flex gap-2 p-4">
                        {
                            dataMovie?.map((item) =>(
                                <Card
                                    key={item.id}
                                    Url={item.backdrop_path}
                                />
                            ))
                        }
                </div>
           </div>

           <AiOutlineRight
           onClick={() => moveRight()}
            className=' cursor-pointer ' size={120} />
        </div>
    )
}

export {Carousel}