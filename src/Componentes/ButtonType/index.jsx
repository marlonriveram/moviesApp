import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
function ButtonType ({type,size,color}) {

    const buttonType = {
        'letArrow':<AiOutlineLeft size={size} color={color}/>,
        'rightArrow':<AiOutlineRight size={size} color={color}/>
    }
    return(
        <>
        {buttonType[type]}
        </>
    )
};

export { ButtonType }