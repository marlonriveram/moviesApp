function CardsAllMovies () {
    return(
        <div className='card-all-movies w-40 h-40 flex flex-col gap-2 bg-blue-200 rounded-md'>
            <figure className='container-img-movie w-full h-full overflow-hidden'>
                <img className='w-full h-full' src="#" alt="Portada Pelicula" />
            </figure>
            <p className='name-movie text-center'>nombre de la pelicula</p>
        </div>
    )
};

export {CardsAllMovies}