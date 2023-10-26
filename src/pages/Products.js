import M1 from "../assets/M1.JPG"
import C1 from "../assets/С1.jpg"
import S1 from "../assets/S1.JPG"
import city2 from "../assets/city2.jpg"
import gidro from "../assets/gidro.jpg" 
import aero1 from "../assets/aero1.png" 
import L1 from "../assets/L1.webp"
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
      "img": S1
  },
  {
      "id": 3,
      "name": "EivaCity",
      "img": city2
  }
]

const productsLabs =
[
  {
      "id": 1,
      "name": "LabLite",
      "img": L1
  },
  {
      "id": 1,
      "name": "LabStandart",
      "img": L1
  },
  {
      "id": 1,
      "name": "LabMax",
      "img": L1
  }
]

const productsGidro = [
  {
    "id": 1,
    "name": "Gidro",
    "img": gidro
  },
  {
    "id": 2,
    "name": "Aero",
    "img": aero1
  }
]

function Products() {
    return (
      <>
        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase pt-1 pl-5 pr-5 text-white text-4xl p-5">
            Станция Эйва
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
          {
            productsLabs.map(product => (
            <ProductCard item={product}/>
            ))
          }
        </div>

        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase font-extralight pt-1 pl-5 pr-5 text-white text-4xl p-5">
          ГИДРОПОННЫЕ И АЭРОПОННЫЕ СИСТЕМЫ
          </div>
        <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3">
          Гидропонные и аэропонные системы это идеальный вариант для бизнеса, если необходимо максимально быстро и качественно выращивать продукты питания.
          </div>
          {
            productsGidro.map(product => (
            <ProductCard item={product}/>
            ))
          }
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