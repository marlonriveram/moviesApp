import { AiFillHeart, AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
function ButtonType ({type,size,color}) {

    const buttonType = {
        'letArrow':<AiOutlineLeft className="cursor-pointer" size={size} color={color}/>,
        'rightArrow':<AiOutlineRight className="cursor-pointer" size={size} color={color}/>,
        'like':<AiFillHeart className="cursor-pointer" size={size} color={color}/>
    }
    return(
        <>
        {buttonType[type]}
        </>
    )
};

export { ButtonType }