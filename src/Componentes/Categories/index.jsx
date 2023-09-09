function Categories ( prop) {
    return(
        <ul className='container-categorie bg-gray-400 flex flex-col gap-3 relative'>
            {prop.children}
        </ul>
    )
};

export {Categories}