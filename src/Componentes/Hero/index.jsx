import './style.css'
function Hero (){
    const urlFondo = 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=600';
    const stylesHero = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${urlFondo}) `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center' 
    }
    return(
        <div style={stylesHero} className={` bg-gray-300 hero w-4/5 h-96 m-auto mt-4 rounded-lg sm:w-full sm:m-0 sm:rounded-none sm:h-screen sm:mb-7 relative`}>

        <div className='info-pelicula  w-6/12 flex flex-col gap-5 p-3 absolute bottom-0 '>
            <h3 className='titulo-pelicula text-3xl font-black'>Nombre pelicula</h3>

            <p className='sinopsis-pelicula text-start text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint vitae perferendis a repudiandae saepe cumque magni aliquid dolorum dolores iure impedit dolorem unde, porro, distinctio esse fugiat neque non.</p>

            <div className="container-btns flex gap-8 justify-center">
            <button className='bg-zinc-300 shadow-2xl p-2 btn-reproducir text-lg font-medium rounded-xl'>Reproducir</button>
            <button className='bg-zinc-300 shadow-2xl p-2 btn-mas-info text-lg font-medium rounded-xl'>Mas Info</button>
            </div>
        </div>
             
        </div>
    )
};
 
export {Hero}


     
