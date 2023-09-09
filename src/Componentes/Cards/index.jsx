import './index.css'
function Card ({Url}){
    return(
        <div className="card w-28 h-40 ">
            <figure className="Container_img h-full ">
                <img className='img-carousel rounded-lg h-full object-cover'src={`https://image.tmdb.org/t/p/original/${Url}`} 
                alt="Pelicula" />
            </figure>
        </div>
    )
};

export {Card}