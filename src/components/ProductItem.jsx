
function ProductItem({item}) {
    return ( 
        
            <div className="text-xl leading-normal xl:text-2xl text-white xl:leading-10 text-justify font-thin" key={item.id} >
                    {item.text}
            </div>
        
    );
}

export default ProductItem;