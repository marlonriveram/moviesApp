import './index.css'
function Layout (prop) {
    return(
        <div className='layout flex flex-col w-full bg-zinc-700 '>
            {prop.children}
        </div>
    )
}

export {Layout}