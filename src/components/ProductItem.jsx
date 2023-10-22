import { Link } from "react-router-dom";
function ProductItem({item}) {
    return ( 
        <Link to={`${item.id}`}>
            <div className="text-xl leading-normal xl:text-2xl text-white xl:leading-10 text-justify font-thin" key={item.id} >
                    {item.text}
            </div>
        </Link>
    );
}

export default ProductItem;