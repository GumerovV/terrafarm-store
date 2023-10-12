import M1 from "../assets/M1.webp"
import M2 from "../assets/M2.webp"
import M3 from "../assets/M3.webp"
import L1 from "../assets/L1.webp"
import otz_tanya from "../assets/otz_tanya.jpeg"
import otz_luk from "../assets/otz_luk.jpeg"
import otz_katya from "../assets/otz_katya.jpg"

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
            <br/>
            Корпус Эйвы выполнен из березовой слоистой плиты, обработан двухкомпонентной системой масел, для создания безопасной и приятной на ощупь влагостойкой поверхности.
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            Q-1
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={M1} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            C-2
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={M2} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            B-3
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={M3} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            MINI
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={M1} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            DEFAULT
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={M2} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            CITY
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={M3} alt=""></img>
          </div>
        </div>

        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase font-extralight pt-1 pl-5 pr-5 text-white text-4xl p-5">
          ЛАБОРАТОРНОЕ ОБОРУДОВАНИЕ
          </div>
          <hr className="mx-auto w-4/5 text-center color-white"/>
          <div className="font-extralight text-white text-2xl m-3">
          Лабораторное оборудование представляет из себя герметичные камеры широкого климатического диапазона. 
          Применяются для создания различных климатических условий, проведения опытов и экспериментов над растениями. 
          Устройство способно воссоздать практически любые климатические условия на планете Земля, и даже близкие к другим планетам.
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            LITE
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={L1} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            STANDART
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={L1} alt=""></img>
          </div>
          <div className="font-extralight inline-block relative truncate no-underline mt-3 mr-1.5 mb-0 ml-1.5 p-5">
            MAX
            <img className="max-w-full w-96 h-64 duration-0.2 delay-0 transition-opacity" src={L1} alt=""></img>
          </div>
        </div>

        <div className="text-white text-center my-1 mx-5 mb-0 ml-5">
          <div className = "text-center text-uppercase font-extralight pt-1 pl-5 pr-5 text-white text-4xl p-5">
          ОТЗЫВЫ НАШИХ ПОКУПАТЕЛЕЙ
          </div>
          <hr className="mx-auto w-4/5 text-center color-white"/>

          <div className="text-base mt-10 mb-10 mx-10 text-white text-center">

            <div className="mt-0 mr-3 mb-5 ml-32 inline-block relative text-center align-top w-1/5">
              <img className="rounded-full border-2 border-solid w-24" src={otz_tanya} alt=""/>
              <div className="text-2xl italic">Гарнаева Татьяна</div>
              <div className="italic text-center font-extralight text-xl">
                Заказала «SmartPot Plus» и не жалею все работает отлично, без сбоев теперь можно уезжать в отпуск и не переживать за мою любимую Хавортию</div>
            </div>

            <div className="mt-0 mr-3 mb-5 ml-32 inline-block relative text-center align-top w-1/5">
              <img className="rounded-full border-2 border-solid w-24" src={otz_luk} alt=""/>
              <div className="text-2xl italic">Жуков Лукьян</div>
                <div className="italic text-center font-extralight text-xl">
                После проведения ремонта в квартире в стиле High-Tec, это устройство идеально вписалось в интерьер квартиры, a подсветка c туманом придает определенный шаарм
                </div>
            </div>

            <div className="mt-0 mr-0 mb-5 ml-32 inline-block relative text-center align-top w-1/5">
              <img className="rounded-full border-2 border-solid w-24" src={otz_katya} alt=""/>
              <div className="text-2xl italic">Гуралевич Екатерина</div>
                <div className="italic text-center font-extralight text-xl">
                Подарила своей бабушке «SmartPot Series 3», она очень любит герань и здесь этот цветок идет в подарок, ваш горшок поможет ей больше не тратить сил на уход за геранью
                </div>
            </div>

          </div>
        </div>
      </>
    );
}

export default Products;