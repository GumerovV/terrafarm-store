import EywaMini_full_stack_dub from "../assets/EywaMini/dub/full_stack.webp"
import S1 from "../assets/Eiva/S1.JPG"
import city2 from "../assets/EivaCity/city2.jpg"
import gidro from "../assets/Gidro/gidro.jpg" 
import aero1 from "../assets/Aero/aero1.png" 
import control1 from "../assets/Control/control1.png" 
import L1 from "../assets/L1.webp"
import ProductCard from "../components/ProductCard";

const productsEiva = [
  {
      "id": 1,
      "name": "Eywa Mini",
      "img": EywaMini_full_stack_dub,
      "text": "Eywa Mini topwargwergerw gesrthgser thsrtehrtshsrtyh tsryhtsryh"
  },
  {
      "id": 2,
      "name": "Eywa Standart",
      "img": S1,
      "text": "Eywa Mini top"
  },
  {
      "id": 3,
      "name": "Eywa City",
      "img": city2,
      "text": "Eywa Mini top"
  }
]

const productsLabs =
[
  {
      "id": 4,
      "name": "LabLite",
      "img": L1,
      "text": "Лабораторное оборудование представляет собой камеру широкого климатического диапазона.Применяются для создания различных климатических условий, проведения опытов и экспериментов над растениями."
  },
  {
      "id": 5,
      "name": "LabStandart",
      "img": L1,
      
  },
  {
      "id": 6,
      "name": "LabMax",
      "img": L1
  }
]

const productsGidro = [
  {
    "id": 7,
    "name": "Gidro",
    "img": gidro
  },
  {
    "id": 8,
    "name": "Aero",
    "img": aero1
  },
  {
    "id": 9,
    "name": "Control",
    "img": control1
  }
]

function Products() {
    return (
      <>
        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase pt-1 pl-5 pr-5 text-white text-4xl p-5">
            СТАНЦИЯ ЭЙВА
          </div>
          <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3 text-justify md:text-center">
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
          <div className = "text-center text-uppercase pt-1 pl-5 pr-5 text-white text-4xl p-5 mt-10">
          ЛАБОРАТОРНОЕ ОБОРУДОВАНИЕ
          </div>
          <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3 text-justify md:text-center">
          Лабораторное оборудование представляет из себя камеры широкого климатического диапазона. 
          Применяются для создания различных климатических условий, проведения опытов и экспериментов над растениями. 
          </div>
          {
            productsLabs.map(product => (
            <ProductCard item={product}/>
            ))
          }
        </div>

        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase pt-1 pl-5 pr-5 text-white text-4xl p-5 mt-10">
          ГИДРОПОННЫЕ И АЭРОПОННЫЕ СИСТЕМЫ
          </div>
        <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3 text-justify md:text-center">
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
          <div className = "text-center text-uppercase pt-1 pl-5 pr-5 text-white text-4xl p-5 mt-10">
          АВТОМАТИЗАЦИЯ АПК
          </div>
        <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3 text-justify md:text-center">
          Компания TerraFarm также работает в сфере автоматизации готовых решений. Мы готовы взяться за автоматизацию Ваших АПК под ключ.
          </div>
        </div>

      
      </>
      
    );
}

export default Products;