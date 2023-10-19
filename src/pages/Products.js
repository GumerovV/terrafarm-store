import M1 from "../assets/M1.webp"
import M2 from "../assets/M2.webp"
import M3 from "../assets/M3.webp"
import L1 from "../assets/L1.webp"
import { Routes, Route, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const productsEiva = [
  {
      "id": 1,
      "name": "EivaMini",
      "img": M1
  },
  {
      "id": 2,
      "name": "EivaStandart",
      "img": M2
  },
  {
      "id": 3,
      "name": "EivaCity",
      "img": M3
  }
]

function Products() {
    return (
      <>
        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase font-extralight pt-1 pl-5 pr-5 text-white text-4xl p-5">
            СТАНЦИЯ ЭЙВА
          </div>
          <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3">
          Station Eywa - это дизайнерское устройство для автоматического ухода за домашними растениями.
          Корпус Эйвы выполнен из березовой слоистой плиты, обработан двухкомпонентной системой масел,
          для создания безопасной и приятной на ощупь влагостойкой поверхности. 
          </div>
          {
          productsEiva.map(product => (
          <ProductCard item={product}/>
          ))
        }
        </div>

        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase font-extralight pt-1 pl-5 pr-5 text-white text-4xl p-5">
          ЛАБОРАТОРНОЕ ОБОРУДОВАНИЕ
          </div>
          <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3">
          Лабораторное оборудование представляет из себя герметичные камеры широкого климатического диапазона. 
          Применяются для создания различных климатических условий, проведения опытов и экспериментов над растениями. 
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            LITE
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity rounded-lg" src={L1} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            STANDART
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity rounded-lg" href="standartlabs" src={L1} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            MAX
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity rounded-lg" src={L1} alt=""></img>
          </div>
        </div>

        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase font-extralight pt-1 pl-5 pr-5 text-white text-4xl p-5">
          ГИДРОПОННЫЕ И АЭРОПОННЫЕ СИСТЕМЫ
          </div>
        <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3">
          Гидропонные и аэропонные системы это идеальный вариант для бизнеса, если необходимо максимально быстро и качественно выращивать продукты питания.
          </div>
        </div>
        
        <div>

        </div>

        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase font-extralight pt-1 pl-5 pr-5 text-white text-4xl p-5">
          АВТОМАТИЗАЦИЯ АПК
          </div>
        <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3">
          Компания TerraFarm также работает в сфере автоматизации готовых решений. Мы готовы взяться за автоматизацию Ваших АПК под ключ.
          </div>
        </div>

      
      </>
      
    );
}

export default Products;