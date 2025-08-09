import React, { useState } from 'react'
import HeaderSeccion from '../general/HeaderSeccion'
import '../../styles/carta/Carta.css'
import Entrante from './Entrante';
import HeaderSeccionCarta from './HeaderSeccionCarta';
import ExplicacionMenu from './ExplicacionMenu';
import Hamburguesa from './Hamburguesa';
import ExplicacionPrecios from './ExplicacionPrecios';
import ScrollArriba from '../general/ScrollArriba'
import FiltroCarta from './FiltroCarta';

const entrantes = [
    {
        nombre: 'Patatas',
        precio: '3,00€'
    },
    {
        nombre: 'Patatas con salsa de queso',
        precio: '3,50€'
    },
  	{
        nombre: 'Alitas BBQ (6ud.)',
        precio: '4,50€'
    },
  	{
        nombre: 'Alitas BBQ (12ud.)',
        precio: '9,95€'
    },
    {
        nombre: 'Pops de pollo (12ud.)',
        precio: '5,20€'
    },
  	{
        nombre: 'Pops de pollo (18ud.)',
        precio: '6,20€'
    },
    {
        nombre: 'Nuggets BBQ (6ud.)',
        precio: '4,95€'
    },
  	{
        nombre: 'Nuggets BBQ (12ud.)',
        precio: '9,95€'
    },
    {
        nombre: 'Tequeños (6ud.)',
        precio: '7,95€'
    },
    {
        nombre: 'Tequeños (12ud.)',
        precio: '12,95€'
    }
];

const entrantesVeggie = [
    {
        nombre: 'Nuggets Veggie (6ud.)',
        precio: '4,95€'
    }
];

const smash = [
    {
        nombre: "LA BBB",
        carne: "SMASH BURGER (TERNERA 80 G)",
        ingredientes: "Queso cheddar, pepinillo, ketchup y mostaza",
        precio: "6,45€",
        precioMenu: "8,45€"
    },
    {
        nombre: "LA BBQ",
        carne: "SMASH BURGER (TERNERA 80 G)",
        ingredientes: "Queso cheddar, bacon y salsa BBQ",
        precio: "7,95€",
        precioMenu: "9,95€"
    },
    {
        nombre: "DOBLE BBB",
        carne: "DOBLE SMASH BURGER (TERNERA 160 G)",
        ingredientes: "Queso cheddar, pepinillo, ketchup y mostaza",
        precio: "7,45€",
        precioMenu: "9,45€"
    },
    {
        nombre: "DOBLE BBQ",
        carne: "DOBLE SMASH BURGER (TERNERA 160 G)",
        ingredientes: "Queso cheddar, bacon y salsa BBQ",
        precio: "8,95€",
        precioMenu: "10,95€"
    },
    {
        nombre: "PREMIUM BACON",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Queso cheddar, bacon y salsa bacon",
        precio: "11,15€",
        precioMenu: "13,15€"
    },
    {
        nombre: "LA CLASSIC",
        carne: "SMASH BURGER (VACA Y BUEY 100 G)",
        ingredientes: "Queso cheddar, aros de cebolla crujiente, lechuga, tomate y mayonesa",
        precio: "10,95€",
        precioMenu: "12,95€"
    },
    {
        nombre: "LA QUEEN MARTA",
        carne: "SMASH BURGER (VACA Y BUEY 100 G)",
        ingredientes: "Queso cheddar, cebolla, lechuga, pepinillos y salsa queen",
        precio: "10,95€",
        precioMenu: "12,95€"
    },
    {
        nombre: "LAMARTA",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Queso cheddar, cochinita",
        precio: "11,95€",
        precioMenu: "13,95€"
    },
    {
        nombre: "LA MB",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Crema de queso cabra y cebolla caramelizada",
        precio: "11,95€",
        precioMenu: "13,95€"
    },
    {
        nombre: "ONION RING",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Cebolla al estilo Oklahoma, queso cheddar, pepinillos, queso camembert y salsa LAMARTA",
        precio: "11,95€",
        precioMenu: "13,95€"
    },
    {
        nombre: "LA MOZZAPARMA",
        carne: "SMASH BURGER (VACA Y BUEY 100 G)",
        ingredientes: "Pasta de tomate deshidratado, queso mozzarella, champiñones, rúcula y canónigos, lascas de queso parmesano y cebolla crispy",
        precio: "12,45€",
        precioMenu: "14,45€"
    }
];

const chicken = [
    {
        nombre: "LA CLASSIC CHICKEN",
        carne: "DISCO DE POLLO (100 G)",
        ingredientes: "Queso cheddar, bacon, lechuga, tomate y mayonesa",
        precio: "8,95€",
        precioMenu: "10,15€"
    },
    {
        nombre: "LA MOZZAPARMA",
        carne: "DISCO DE POLLO (100 G)",
        ingredientes: "Pasta de tomate deshidratado, queso mozzarela, champiñónes, rúcula y canónigos, lascas de queso parmesano y cebolla crispy",
        precio: "11,95€",
        precioMenu: "13,95€"
    }
];

const veggie = [
    {
        nombre: "LA CLASSIC VEGGIE",
        carne: "POLLO O CARNE VEGETAL (100 G)",
        ingredientes: "Queso cheddar, aros de cebolla, lechuga, tomate y mayonesa",
        precio: "11,95€",
        precioMenu: "12,95€"
    },
    {
        nombre: "LA MOZZAPARMA",
        carne: "POLLO O CARNE VEGETAL (100 G)",
        ingredientes: "Pasta de tomate deshidratado, queso mozzarela, champiñónes, rúcula y canónigos, lascas de queso parmesano y cebolla crispy",
        precio: "11,95€",
        precioMenu: "12,95€"
    },
    {
        nombre: "LA MB",
        carne: "DOBLE CARNE VEGETAL (200 G)",
        ingredientes: "Crema de queso cabra y cebolla caramelizada",
        precio: "13,95€",
        precioMenu: "15,95€"
    }
];

const glutenFree = [
    {
        nombre: "LA BBB",
        carne: "SMASH BURGER (TERNERA 80 G)",
        ingredientes: "Queso cheddar, pepinillo, ketchup y mostaza",
        precio: "6,95€",
        precioMenu: "9,95€"
    },
    {
        nombre: "DOBLE BBB",
        carne: "DOBLE SMASH BURGER (TERNERA 160 G)",
        ingredientes: "Queso cheddar, pepinillo, ketchup y mostaza",
        precio: "7,95€",
        precioMenu: "10,95€"
    },
    {
        nombre: "PREMIUM BACON",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Queso cheddar, bacon y salsa bacon",
        precio: "10,95€",
        precioMenu: "14,15€"
    },
    {
        nombre: "LA CLASSIC",
        carne: "SMASH BURGER (VACA Y BUEY 100 G)",
        ingredientes: "Queso cheddar, lechuga, tomate, bacon y mayonesa",
        precio: "11,95€",
        precioMenu: "13,95€"
    },
    {
        nombre: "LA MB",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Crema de queso cabra y cebolla caramelizada",
        precio: "12,95€",
        precioMenu: "14,95€"
    }
];

const mascotas = [
    {
        nombre: "MCADAMS LIOFILIZADO",
        carne: "LIBRE DE CEREALES (50 G)",
        ingredientes: "Incluye el bowl de McAdams y un bowl de agua",
        precio: "4,00€",
        precioMenu: "4,50€"
    },
];

function Carta() {
  const [categoria, setCategoria] = useState('Todos');

  return (
    <>
        <ScrollArriba />
        <HeaderSeccion nombre={"Carta"}></HeaderSeccion>

        <ul className='filtros d-flex-row'>
            <li><FiltroCarta mensaje={'Todos'} onClick={() => setCategoria('Todos')} className={categoria=='Todos'?'activo':''} /></li>
            <li><FiltroCarta mensaje={'Entrantes'} onClick={() => setCategoria('Entrantes')} className={categoria=='Entrantes'?'activo':''} /></li>
            <li><FiltroCarta mensaje={'Entrantes Veggie'} onClick={() => setCategoria('EntrantesVeggie')} className={categoria=='EntrantesVeggie'?'activo':''} /></li>
            <li><FiltroCarta mensaje={'Smashhhh'} onClick={() => setCategoria('Smash')} className={categoria=='Smash'?'activo':''} /></li>
            <li><FiltroCarta mensaje={'Chicken'} onClick={() => setCategoria('Chicken')} className={categoria=='Chicken'?'activo':''} /></li>
            <li><FiltroCarta mensaje={'Veggie'} onClick={() => setCategoria('Veggie')} className={categoria=='Veggie'?'activo':''} /></li>
            <li><FiltroCarta mensaje={'Sin Gluten'} onClick={() => setCategoria('SinGluten')} className={categoria=='SinGluten'?'activo':''} /></li>
            <li><FiltroCarta mensaje={'Mascotas'} onClick={() => setCategoria('Mascotas')} className={categoria=='Mascotas'?'activo':''} /></li>
        </ul>


        {/* ENTRANTES */}
        {(categoria == 'Todos' || categoria == 'Entrantes') && (
            <>
                <HeaderSeccionCarta titulo={"ENTRANTES"} imagen={"https://lamarta.es/assets/papas.svg"} />
                <ul className="entrantes d-flex-col" role='list'>
                    {[...entrantes].map((e, i)  => (
                        <Entrante 
                        key={i}
                        nombre={e.nombre}
                        precio={e.precio}
                        />
                    ))}
                </ul>
            </>
        )}

        {/* ENTRANTES VEGGIE */}
        {(categoria == 'Todos' || categoria == 'EntrantesVeggie') && (
            <>
                <HeaderSeccionCarta titulo={"ENTRANTES VEGGIE"} imagen={"https://lamarta.es/assets/vegan.png"} />
                <ul className="entrantes d-flex-col" role='list'>
                    {[...entrantesVeggie].map((e, i)  => (
                        <Entrante 
                        key={i}
                        nombre={e.nombre}
                        precio={e.precio}
                        />
                    ))}
                </ul>
            </>
        )}

        {/* SMASHHHH */}
        {(categoria == 'Todos' || categoria == 'Smash') && (
            <>
                <HeaderSeccionCarta titulo={"SMASHHHH"} imagen={"https://lamarta.es/assets/burguer.svg"} />
                <ExplicacionMenu explicacion={"MENÚ = BURGER + PATATAS Y SALSA DE QUESO + BEBIDA"} />
                <ExplicacionPrecios />
                <ul className="hamburguesas d-flex-col" role='list'>
                    {[...smash].map((s, i)  => (
                        <Hamburguesa 
                        key={i}
                        nombre={s.nombre}
                        carne={s.carne}
                        ingredientes={s.ingredientes}
                        precio={s.precio}
                        precioMenu={s.precioMenu}
                        />
                    ))}
                </ul>
            </>
        )}

        {/* CHICKEN */}
        {(categoria == 'Todos' || categoria == 'Chicken') && (
            <>
                <HeaderSeccionCarta titulo={"CHICKEN"} imagen={"https://lamarta.es/assets/burguer.svg"} />
                <ExplicacionMenu explicacion={"MENÚ = BURGER + PATATAS Y SALSA DE QUESO + BEBIDA"} />
                <ExplicacionPrecios />
                <ul className="hamburguesas d-flex-col" role='list'>
                    {[...chicken].map((s, i)  => (
                        <Hamburguesa 
                        key={i}
                        nombre={s.nombre}
                        carne={s.carne}
                        ingredientes={s.ingredientes}
                        precio={s.precio}
                        precioMenu={s.precioMenu}
                        />
                    ))}
                </ul>
            </>
        )}

        {/* VEGGIE */}
        {(categoria == 'Todos' || categoria == 'Veggie') && (
            <>
                <HeaderSeccionCarta titulo={"VEGGIE"} imagen={"https://lamarta.es/assets/vegan.png"} />
                <ExplicacionMenu explicacion={"MENÚ = BURGER + PATATAS Y SALSA DE QUESO + BEBIDA"} />
                <ExplicacionPrecios />
                <ul className="hamburguesas d-flex-col" role='list'>
                    {[...veggie].map((s, i)  => (
                        <Hamburguesa 
                        key={i}
                        nombre={s.nombre}
                        carne={s.carne}
                        ingredientes={s.ingredientes}
                        precio={s.precio}
                        precioMenu={s.precioMenu}
                        />
                    ))}
                </ul>
            </>
        )}

        {/* SIN GLUTEN */}
        {(categoria == 'Todos' || categoria == 'SinGluten') && (
            <>
                <HeaderSeccionCarta titulo={"SIN GLUTEN"} imagen={"https://lamarta.es/assets/glutenfree.png"} />
                <ExplicacionMenu explicacion={"MENÚ = BURGER + PATATAS Y SALSA DE QUESO + BEBIDA"} />
                <ExplicacionPrecios />
                <ul className="hamburguesas d-flex-col" role='list'>
                    {[...glutenFree].map((s, i)  => (
                        <Hamburguesa 
                        key={i}
                        nombre={s.nombre}
                        carne={s.carne}
                        ingredientes={s.ingredientes}
                        precio={s.precio}
                        precioMenu={s.precioMenu}
                        />
                    ))}
                </ul>
            </>
        )}

        {/* MASCOTAS */}
        {(categoria == 'Todos' || categoria == 'Mascotas') && (
            <>
                <HeaderSeccionCarta titulo={"MASCOTAS"} imagen={"https://lamarta.es/assets/dog.png"} />
                <ExplicacionMenu explicacion={"MENÚ = BOWL + AGUA + CHURU LÍQUIDO (ATÚN), CHURU SÓLIDO (POLLO) O GALLETAS CANAGAN"} />
                <ExplicacionPrecios />
                <ul className="hamburguesas d-flex-col" role='list'>
                    {[...mascotas].map((s, i)  => (
                        <Hamburguesa 
                        key={i}
                        nombre={s.nombre}
                        carne={s.carne}
                        ingredientes={s.ingredientes}
                        precio={s.precio}
                        precioMenu={s.precioMenu}
                        />
                    ))}
                </ul>
            </>
        )}
    </>
  )
}
 
export default Carta
