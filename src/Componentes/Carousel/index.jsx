import { useEffect, useRef, useState } from 'react'
import { useApiPelicula } from '../../Hooks/ApiPeliculas'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Card } from '../CardsCarousel'
import './index.css'
import { WidthContainer } from '../../Hooks/WidthContainers';
import { ButtonType } from '../ButtonType'

function Carousel ({url}) {

    const page = 1;
    const containerCarouselRef = useRef(null);
    const {dataMovie} = useApiPelicula(url,page);
    
    const {containerCarouselWidth} = WidthContainer(containerCarouselRef);// permite saber la dimencion del conatainer del carousel

    // desplazar el carousel a la izquierda
    const moveLeft = () =>{
        if (containerCarouselRef.current) {
            containerCarouselRef.current.scrollLeft -= containerCarouselWidth; // se desplaza a la izq el tamaño que tenga el conatainer del carousel
        }
    }
    // desplazar el carousel a la derecha
    const moveRight = () =>{
        if (containerCarouselRef.current) {
            containerCarouselRef.current.scrollLeft += containerCarouselWidth; // se desplaza a la der el tamaño que tenga el conatainer del carou
        }
    }

    return(
        <div className='container-rows-carosuel  flex items-center relative  '>
           <AiOutlineLeft
           onClick={() => moveLeft()}
           className=' cursor-pointer ' size={120} 
           />

            <div
                className='container-carousel overflow-hidden '
                ref={containerCarouselRef}
            >
                    
                <div className="carousel flex gap-2 p-4">
                    {dataMovie?.map((item) =>(
                    <Card
                        key={item.id}
                        poster={item.poster_path}
                        title={item.title || item.name}
                        dataMovie={dataMovie}

                    />))}

                </div>
            </div>

           <AiOutlineRight
            onClick={() => moveRight()}
            className=' cursor-pointer ' size={120} 
            />
            {/* <ButtonType
                type={'letArrow'}
                size={120}
                color={'black'}
            />
             */}
        </div>
    )
}

export {Carousel}