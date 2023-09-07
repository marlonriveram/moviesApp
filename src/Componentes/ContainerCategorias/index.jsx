function ContainerCategories ( prop) {
    return(
        <ul className='container-categorie bg-gray-400 overflow-hidden'>
            {prop.children}
        </ul>
    )
};

export {ContainerCategories}