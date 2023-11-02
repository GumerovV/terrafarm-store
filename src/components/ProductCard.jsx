import { Link } from "react-router-dom";

function ProductCard({item}) {
    return ( 
        <Link to={`${item.id}`}>
            <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5" key={item.id}>
                {item.name}
                <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity rounded-lg" src={item.img} alt=""></img>
            </div>
        </Link>
    );
}

export default ProductCard;