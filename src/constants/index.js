//socials
import vk from '../assets/vk.webp';
import yt from '../assets/youtube.webp';
import inst from '../assets/inst.webp';

//Persons
import Pavel_M from "../assets/personal/Pavel_M.webp";
import Ruslan_H from "../assets/personal/Ruslan_H.webp";
import Danil_B from "../assets/personal/Danil_B.webp";
import Denis_K from "../assets/personal/Denis_K.webp";
import Sayat_M from "../assets/personal/Sayat_M.webp";
import Nuria_D from "../assets/personal/Nuria_D.webp";
import Karina_R from "../assets/personal/Karina_R.webp";
import Nastya from "../assets/personal/Nastya.webp";
import Artem_Z from "../assets/personal/Artem_Z.webp";
import Vlad_G from "../assets/personal/Vlad_G.webp";
import Vlad_T from "../assets/personal/Vlad_T.webp";

//Eywa
import ST_MINI from '../assets/station-eywa.jpg';

export const socials = [{
    'id': 1,
    'name': "VK",
    'img': vk
},
{
    'id': 2,
    'name': "YouTube",
    'img': yt
},
{
    'id': 3,
    'name': "Instagram",
    'img': inst
}
]


export const persons = [
    {id:1,name:"Мелешенко Павел",content:"Генеральный директор\nОснователь компании", img:Pavel_M},
    {id:2,name:"Сулейманов Руслан",content:"Помощник руководителя\nмаркетолог", img:Ruslan_H},
    {id:3,name:"Данил Болбуков",content:"Главный инженер программист", img:Danil_B},
    {id:4,name:"Денис Колядов",content:"Менеджер по продажам", img:Denis_K},
    {id:5,name:"Саят Мадыкаримов",content:"Инженер конструктор", img:Sayat_M},
    {id:6,name:"Нурия Мурзахметова",content:"СММ менеджер", img:Nuria_D},
    {id:7,name:"Карина Речкина",content:"Копирайтер", img:Karina_R},
    {id:8,name:"Настя Щепеткова",content:"Cпециалист по внешним связям", img:Nastya},
    {id:9,name:"Артем Жуков",content:"Front-end разработчик", img:Artem_Z},
    {id:10,name:"Влад Гумеров",content:"Full-stack разработчик", img:Vlad_G},
    {id:11,name:"Влад Трихин",content:"Full-stack разработчик", img:Vlad_T}
]


export const products = [
    {
        "id": 1,
        "name": "Станция Ейва Мини",
        "disc": "Станция Эйва Q-1 имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал:",
                "items": ["- Автополив", "- Туман", "- Веб-интерфейс", "- Интерактивный логотип", "- Датчики температуры",]
            },
            {
                "name": "Технические характеристики:",
                "items": ["- Габариты устройства: 285x180x180 мм", "- Масса станции: 1.3 кг", "", "- Диаметр цветочного горшка: 13 см",
                 "- Датчики: Влажности воздуха, почвы, уровня воды", "- Объем бака для воды: 1,6 л"]
            },
            {
                "name": "Условия эксплуатации:",
                "items": ["- Температура: 10-30 °C", "- Влажность: 70%"]
            }   
        ],
        "images": [ST_MINI],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 2,
        "name": "Станция Ейва Сити",
        "disc": "Станция Эйва Сити имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал:",
                "items": ["- Автополив", "- Туман", "- Веб-интерфейс", "- Интерактивный логотип", "- Датчики температуры",]
            },
            {
                "name": "Технические характеристики:",
                "items": ["- Габариты устройства: 285x180x180 мм", "- Масса станции: 1.3 кг", "", "- Диаметр цветочного горшка: 13 см",
                 "- Датчики: Влажности воздуха, почвы, уровня воды", "- Объем бака для воды: 1,6 л"]
            },
            {
                "name": "Условия эксплуатации:",
                "items": ["- Температура: 10-30 °C", "- Влажность: 70%"]
            }   
        ],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    }
]