import './index.css'
function Carousel (prop){
    return(
        <div className="container_carousel flex justify-between p-3 gap-1 ">
            {prop.children}
        </div>
    )
};

export {Carousel}