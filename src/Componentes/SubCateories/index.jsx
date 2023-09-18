import { useState,useRef,useEffect } from "react"
import { Link } from "react-router-dom"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Card } from "../CardsCarousel"
import './index.css'
import { useApiPelucula } from "../../Hooks/ApiPeliculas";

function SubCategorie ({Url,titulo}){
   
    const [offset,setOffset] = useState(0);
    const [containerCarouselWidth,setContainerCarouselWidth] = useState(0);
    const [carouselWidth,setCarouselWidth] = useState (0);
    const carouselRef = useRef(null);
    const containerCarouselRef = useRef(null);
  
    const {urlApiPelicula} = useApiPelucula (Url)
  

    useEffect(() =>{
        const observador = new ResizeObserver((entries) =>{
            setContainerCarouselWidth(entries[0].contentRect.width)
            setCarouselWidth(entries[1].contentRect.width)
        });
       if(containerCarouselRef.current || carouselRef.current){
        observador.observe(containerCarouselRef.current)
        observador.observe(carouselRef.current);
       }

       return () => {
        observador.disconnect();
    };
    },[])


    const moveRight = () =>{
       
        if(offset < 0  ){
            setOffset(item => item + containerCarouselWidth);
        }

       
    };

    const moveLeft = () =>{
        let acumTranslateInLeft = offset + carouselWidth;
        let leftLimit = acumTranslateInLeft - containerCarouselWidth;

        if(leftLimit >= containerCarouselWidth){
            setOffset(item => item - containerCarouselWidth);
        }else if(leftLimit < containerCarouselWidth && leftLimit > 0){
            setOffset(item => item - leftLimit);
        }
      
    };
  
    const translateInX= {transform:`translateX(${offset}px `}  
    return(
   <div className='container-subcategoria'>
       <div className='title py-1 px-14 flex justify-between'>
       <h2 className='text-2xl font-extralight '>{titulo}</h2>
       {/*{{pathname:'/all-movies',state:{data:Url}}} para enviar varios parametros 
       la ruta de destinio pathname:'/all-movies' y state es un array que guarde dentro de data que es la url*/ }
        <Link to={{pathname:'/all-movies',state:{data:Url}}}>  
            <p className='cursor-pointer font-semibold'>see all</p>
        </Link>
       </div>
         <div className='subcategoria  flex items-center relative '>
           <AiOutlineLeft 
           onClick={() => moveLeft()}
           className='h-28 left-0 top-1/3 cursor-pointer bg-transparent' size={40}  />
           <div 
            ref={containerCarouselRef}
           className='container-carousel w-full flex items-center overflow-hidden '>
                <div
                ref={carouselRef}
                style={translateInX}
                className="carousel flex  p-3 gap-2  ">
                        {
                            urlApiPelicula?.map((item) =>(
                                <Card key={item.id}
                                    Url={item.backdrop_path}
                                />
                            ))
                        }
                </div>
           </div>
           <AiOutlineRight 
           onClick={() => moveRight()}
            className='h-28 right-0 top-1/3 cursor-pointer ' size={40} />
        </div>
   </div>
    )
};

export{SubCategorie}