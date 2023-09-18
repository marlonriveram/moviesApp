function Categories ( prop) {
    return(
        <ul className='container-categorie  flex flex-col gap-3 relative'>
            {prop.children}
        </ul>
    )
};

export {Categories}