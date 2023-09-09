import { Hero } from "../../Componentes/Hero"
import { Categories } from "../../Componentes/Categories"
import { SubCategorie } from "../../Componentes/SubCateories";

function SeriesTv () {
    const urlTigre = 'https://images.pexels.com/photos/3777200/pexels-photo-3777200.jpeg?auto=compress&cs=tinysrgb&w=600';
    const urlLeon = 'https://images.pexels.com/photos/68421/pexels-photo-68421.jpeg?auto=compress&cs=tinysrgb&w=600'
    return(
        <>
        <Hero />
        <Categories>
          <SubCategorie imgUrl={urlTigre}/>
          <SubCategorie imgUrl={urlLeon}/>
        </Categories>
        </>
    )
};

export {SeriesTv}