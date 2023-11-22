import { Link } from "react-router-dom";

function ProductCard({item}) {
    return ( 
        <Link to={`${item.id}`}>
            <div className="font-extralight inline-block relative truncate no-underline mt-4 mr-1.5 mb-0 ml-1.5 p-5 w-64 h-64" key={item.id}>
                    <img className="max-w-full w-full h-full duration-0.2 delay-0 transition-opacity rounded-lg mt-6" src={item.img} alt=""></img>
                    <div class="absolute inset-0 flex-col opacity-100 bg-black/100 w-54 h-56 mt-56 hover:opacity-100 hover:bg-black/90 hover:mt-11 ml-5 mr-5 rounded-lg hover:duration-500">
                        <p class="text-white text-xl text-center whitespace-pre-wrap mb-10">{item.name}</p>
                        <p class="text-white items-center justify-center whitespace-pre-wrap text-xs">{item.text}</p>
                    </div>
            </div>
        </Link>
    );
}

export default ProductCard;