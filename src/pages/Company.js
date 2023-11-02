import React from "react";
import {Person} from "../components/Person";
import { persons } from "../constants";

import fsi from "../assets/fsi.webp";
import cirto from "../assets/cirto.webp";
import sbi from "../assets/sbi.webp";
import asi from "../assets/photo_asi.webp";
import tusur from "../assets/TUSUR.png";
import darvin from "../assets/logo_darvin.svg";

function Company() {
    return (
    <>
        <div className="flex w-full flex-col items-center px-4 sm:px-10 md:px-24 h-auto text-white mb-10 md:mb-10">
            <div className="w-auto md:w-3/4  md:mx-10">
                <div className="text-center text-[45px] my-5 sm:my-5 leading-[1.2]">{"О компании"}</div>
            </div>
            <div className="w-full border-b mb-10 border-white  bottom-12"></div>
            <div className="text-xl leading-normal xl:text-2xl text-white xl:leading-10 text-justify font-thin">
                TerraFarm – активно развивающаяся компания, цель которой заключается в разработке и внедрении новых инновационных продуктов, а также в развитии сельскохозяйственной и научной деятельности в стране, что несомненно способствует ее развитию. В настоящее время мы наблюдаем бурное развитие сельскохозяйственной индустрии, а также максимальное упрощение жизни людей при помощи роботизации и автоматизации обыденных повседневных процессов. Это подтверждают общемировые тренды и ведущие технологические компании. Разрабатываемые нами устройства направлены на доступную автоматизацию, чтобы в будущем каждый человек имел возможность наслаждаться домашними растениями и их красотой без дополнительных усилий. Компания TerraFarm поддерживает и активно участвует в различных выставках, конференциях, акселераторах. Компания сотрудничает с АСИ, Точкой кипения и другими игроками на арене инноваций. Команда компании состоит из амбициозных молодых специалистов, готовых производить технологичные и в то же время простые в использовании продукты, чтобы радовать вас каждый день.
            </div>
        </div>
        <div className="flex w-full flex-col items-center px-4 sm:px-10 md:px-24 h-auto text-white mb-10 md:mb-0">
            <div className="w-auto md:w-3/4  md:mx-10">
                <div className="text-center text-[45px] my-5 sm:my-5 leading-[1.2]">{"Наши партнеры"}</div>
            </div>
            <div className="w-full border-b mb-10 border-white  bottom-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 w-full justify-items-center md:flex-row ">
                    <img src={fsi} className="h-32 mb-20" alt=""/>
                    <img src={asi} className="h-32 mb-20" alt=""/>
                    <img src={tusur} className="h-32 mb-20" alt=""/>
                    <img src={darvin} className="h-32 mb-20" alt=""/>
                    <img src={cirto} className="h-32 mb-20" alt=""/>
                    <img src={sbi} className="h-32 mb-20" alt=""/>
                </div>
        </div>
        <div className="flex w-full flex-col items-center px-4 sm:px-10 md:px-24 h-auto text-white mb-10 md:mb-0">
            <div className="w-auto md:w-3/4  md:mx-10">
                <div className="text-center text-[45px] my-5 sm:my-5 leading-[1.2]">{"Наша команда"}</div>
            </div>
            <div className="w-full border-b mb-10 border-white  bottom-12"></div>
            <div className="w-full flex flex-wrap justify-center xl:gap-10">
                {
                    persons.map(person =>
                    <Person person={person} key={person.id} />)
                }
            </div>
        </div>
    </>
    );
}

export default Company;