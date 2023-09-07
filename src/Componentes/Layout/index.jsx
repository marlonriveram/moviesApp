import './index.css'
function Layout (prop) {
    return(
        <div className='layout flex flex-col overflow-hidden w-full '>
            {prop.children}
        </div>
    )
}

export {Layout}