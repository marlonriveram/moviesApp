import './index.css'
function Layout (prop) {
    return(
        <div className='layout flex flex-col w-full '>
            {prop.children}
        </div>
    )
}

export {Layout}