import React from 'react'
import HeaderSeccion from '../general/HeaderSeccion'
import '../../styles/carta/Carta.css'
import Entrante from './Entrante';
import HeaderSeccionCarta from './HeaderSeccionCarta';
import ExplicacionMenu from './ExplicacionMenu';

const $d = document,
$entrantesBody = $d.querySelector('#entrantes-body'),
$entrantesVeggieBody = $d.querySelector('#entrantes-veggie-body'),
$smashBody = $d.querySelector('#smash-body'),
$chickenBody = $d.querySelector('#chicken-body'),
$veggieBody = $d.querySelector('#veggie-body'),
$glutenFreeBody = $d.querySelector('#gluten-free-body');

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
        nombre: 'Nuggets Veggie con patatas (6ud.)',
        precio: '6,50€'
    }
];

const smash = [
    {
        nombre: "LA BBB",
        carne: "SMASH BURGER (TERNERA 80 G)",
        ingredientes: "Queso cheddar, pepinillo, ketchup y mostaza",
        precio: "5,95€",
        precioMenu: "7,95€"
    },
    {
        nombre: "LA BBQ",
        carne: "SMASH BURGER (TERNERA 80 G)",
        ingredientes: "Queso cheddar, bacon y salsa BBQ",
        precio: "6,95€",
        precioMenu: "8,95€"
    },
    {
        nombre: "DOBLE BBB",
        carne: "DOBLE SMASH BURGER (TERNERA 160 G)",
        ingredientes: "Queso cheddar, pepinillo, ketchup y mostaza",
        precio: "6,95€",
        precioMenu: "8,95€"
    },
    {
        nombre: "DOBLE BBQ",
        carne: "DOBLE SMASH BURGER (TERNERA 160 G)",
        ingredientes: "Queso cheddar, bacon y salsa BBQ",
        precio: "8,40€",
        precioMenu: "9,95€"
    },
    {
        nombre: "PREMIUM BACON",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Queso cheddar, bacon y salsa bacon",
        precio: "9,95€",
        precioMenu: "12,15€"
    },
    {
        nombre: "LA CLASSIC",
        carne: "SMASH BURGER (VACA Y BUEY 100 G)",
        ingredientes: "Queso cheddar, aros de cebolla crujiente, lechuga, tomate y mayonesa",
        precio: "9,95€",
        precioMenu: "12,15€"
    },
    {
        nombre: "LA QUEEN MARTA",
        carne: "SMASH BURGER (VACA Y BUEY 100 G)",
        ingredientes: "Queso cheddar, cebolla, lechuga, pepinillos y salsa queen",
        precio: "9,95€",
        precioMenu: "12,15€"
    },
    {
        nombre: "LAMARTA",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Queso cheddar, cochinita",
        precio: "10,95€",
        precioMenu: "13,15€"
    },
    {
        nombre: "LA MB",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Crema de queso cabra y cebolla caramelizada",
        precio: "11,95€",
        precioMenu: "13,15€"
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
        precio: "11,95€",
        precioMenu: "13,95€"
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
        precio: "10,95€",
        precioMenu: "12,95€"
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
        precioMenu: "8,95€"
    },
    {
        nombre: "DOBLE BBB",
        carne: "DOBLE SMASH BURGER (TERNERA 160 G)",
        ingredientes: "Queso cheddar, pepinillo, ketchup y mostaza",
        precio: "7,95€",
        precioMenu: "9,95€"
    },
    {
        nombre: "PREMIUM BACON",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Queso cheddar, bacon y salsa bacon",
        precio: "10,95€",
        precioMenu: "13,15€"
    },
    {
        nombre: "LA CLASSIC",
        carne: "SMASH BURGER (VACA Y BUEY 100 G)",
        ingredientes: "Queso cheddar, lechuga, tomate, bacon y mayonesa",
        precio: "10,95€",
        precioMenu: "12,95€"
    },
    {
        nombre: "LA MB",
        carne: "DOBLE SMASH BURGER (VACA Y BUEY 200 G)",
        ingredientes: "Crema de queso cabra y cebolla caramelizada",
        precio: "12,95€",
        precioMenu: "14,95€"
    }
];

function Carta() {
  return (
    <>
      <HeaderSeccion nombre={"Carta"}></HeaderSeccion>
      <HeaderSeccionCarta titulo={"ENTRANTES"} imagen={"https://lamarta.es/assets/papas.svg"} />
      <section className="entrantes d-flex-col">
        {[...entrantes].map((e, i)  => (
          <Entrante 
            key={i}
            nombre={e.nombre}
            precio={e.precio}
          />
        ))}
      </section>

      <HeaderSeccionCarta titulo={"ENTRANTES VEGGIE"} imagen={"https://lamarta.es/assets/vegan.png"} />
      <section className="entrantes d-flex-col">
        {[...entrantesVeggie].map((e, i)  => (
          <Entrante 
            key={i}
            nombre={e.nombre}
            precio={e.precio}
          />
        ))}
      </section>


      <HeaderSeccionCarta titulo={"SMASHHHH"} imagen={"https://lamarta.es/assets/burguer.svg"} />
      <ExplicacionMenu explicacion={"MENÚ = BURGER + PATATAS Y SALSA DE QUESO + BEBIDA"} />


      <HeaderSeccionCarta titulo={"CHICKEN"} imagen={"https://lamarta.es/assets/burguer.svg"} />


      <HeaderSeccionCarta titulo={"VEGGIE"} imagen={"https://lamarta.es/assets/vegan.png"} />


      <HeaderSeccionCarta titulo={"SIN GLUTEN"} imagen={"https://lamarta.es/assets/glutenfree.png"} />


      <HeaderSeccionCarta titulo={"MASCOTAS"} imagen={"https://lamarta.es/assets/dog.png"} />
      <ExplicacionMenu explicacion={"MENÚ = BOWL + AGUA + CHURU LÍQUIDO (ATÚN), CHURU SÓLIDO (POLLO) O GALLETAS CANAGAN"} />
    </>
  )
}
 
export default Carta
