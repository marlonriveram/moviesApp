import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Card } from "../Cards"
import './index.css'
function SubCategorie ({Url,titulo}){
    return(
   <div>
        <h2 className='text-center'>{titulo}</h2>
         <div className='subcategoria flex relative w-full'>
           <AiOutlineLeft className='z-10 absolute left-0 top-1/3' size={60} />
           <div className='container-carousel flex overflow-scroll'>
               {
                Url?.map((item) =>(
                    <div className="bg-gray-300 carousel flex justify-between p-3 gap-1 "
                    key={item.id}
                    >
                    <Card 
                    Url={item.backdrop_path}/>
                </div>
                ))
               }
           </div>
           <AiOutlineRight className='z-10 absolute right-0 top-1/3' size={60} />
        </div>
   </div>
    )
};

export{SubCategorie}