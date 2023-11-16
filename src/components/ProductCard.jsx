import { Link } from "react-router-dom";
import Shutter from "./Shutter.jsx"
function ProductCard({item}) {
    return ( 
        <Link to={`${item.id}`}>
            <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5"key={item.id}>
                {item.name}
                <img className="max-w-full w-64 h-64 duration-0.2 delay-0 transition-opacity rounded-lg trigger" src={item.img} alt=""></img>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p class="text-white text-lg">Текст появляется при наведении</p>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;