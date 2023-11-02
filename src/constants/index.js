import vk from '../assets/vk.webp';
import yt from '../assets/youtube.webp';
import inst from '../assets/inst.webp';

import M1 from "../assets/EivaMini/M1.JPG"
import M2 from "../assets/EivaMini/M2.JPG"
import M3 from "../assets/EivaMini/M3.JPG"
import M4 from "../assets/EivaMini/M4.JPG"

import S1 from "../assets/Eiva/S1.JPG"
import S2 from "../assets/Eiva/S2.JPG"
import S3 from "../assets/Eiva/S3.JPG"
import S4 from "../assets/Eiva/S4.jpg"
import S5 from "../assets/Eiva/S5.jpg"
import S6 from "../assets/Eiva/S6.jpg"

import C1 from "../assets/EivaCity/С1.jpg"
import C2 from "../assets/EivaCity/С2.jpg"
import C3 from "../assets/EivaCity/С3.jpg"
import C4 from "../assets/EivaCity/C4.jpg"

import gidro2 from "../assets/Gidro/gidro2.png"
import gidro3 from "../assets/Gidro/gidro3.png"



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


export const products = [
    {
        "id": 1,
        "name": "Станция Эйва Mini",
        "disc": "Станция Эйва Mini имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [M1, M2, M3, M4],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 2,
        "name": "Станция Эйва",
        "disc": "Станция Эйва имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [S1, S2, S3, S4, S5, S6],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 3,
        "name": "Станция Эйва Сити",
        "disc": "Станция Эйва Сити имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [C1,C2,C3,C4],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 4,
        "name": "Labs lite",
        "disc": "labs lite имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [gidro2, gidro3],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 5,
        "name": "Labs standart",
        "disc": "labs standart имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [gidro2, gidro3],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 6,
        "name": "Labs max",
        "disc": "labs max имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [gidro2, gidro3],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 7,
        "name": "gidro",
        "disc": "labs lite имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [gidro2, gidro3],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 8,
        "name": "aero",
        "disc": "labs lite имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [gidro2, gidro3],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
    {
        "id": 9,
        "name": "control",
        "disc": "labs lite имеет кубический вид - это идеальная форма, четкая геометрия и строгость линий. Выполнена в лаконичном стиле и подходящей цветовой палитре, что позволяет вписать станцию в любой интерьер. Станция контролирует влажность воздуха вокруг растения, при помощи системы генерации тумана, датчиков влажности и температуры воздуха. А также поддерживает определенное количество влаги в почве посредством работы датчика влажности почвы и системы полива. За счет съемной конструкции этого датчика и съемного внутреннего горшка, с растением удобно проводить различные манипуляции в случае необходимости.",
        "characteristic": [
            {
                "name": "Функционал",
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
        "images": [gidro2, gidro3],
        "videos": ["https://www.youtube.com/embed/YNstjSvrsPw", "https://www.youtube.com/embed/rUNovkiVOdE"]
    },
]
