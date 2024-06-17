import React from 'react'
import SlideImagenes from '../SlideImagenes';
import { MdSportsHandball } from 'react-icons/md';
import { ISlideContent } from '@/types/SlideContent';
import { GiFruitBowl } from 'react-icons/gi';


const images = [
    { text: '' },
    { text: '' },
    { text: 'Es la primera bebida diseñada para ayudar a prevenir la formación de cálculos urinarios. La combinación de las dosis adecuadas de sales de citrato con fruta de café, hacen que se eviten la formación de los cristales productores de los cálculos' },
    { text: 'Producto nutracéutico codesarrollado con la Fundación Cardiovascular de Colombia, que mejora la función y estructura muscular esquelética y respiratoria en humanos.' },
  ];


const slideContent : ISlideContent[] = [
    {
        background: 'url(/img/nuestros-productos/naox.png)',
        color: '#f00a0a',
        title: '',
        subtitle: 'Concentrado de fruta de Café en sachet, perfecto para  llevar a cualquier lugar.',
        icon: <GiFruitBowl size={80}/>, 
    },
    {
        background: 'url(/img/nuestros-productos/naox-vital.png)',
        color: '#084930',
        title: '',
        subtitle: 'Concentrado de fruta de Café en sobre, perfecto para llevar a cualquier lugar. Adicionalmente contiene 4 ingredientes con alto poder antioxidante: te negro, semilla de uva, hoja de moringa y betaglucanos de ganoderma lucidum.',
        icon: <GiFruitBowl size={80}/>, 
    },
    {
        background: 'url(/img/nuestros-productos/naox-stone.png)',
        color: '#8a9216',
        title: '',
        subtitle: 'Es la primera bebida diseñada para ayudar a prevenir la formación de cálculos urinarios. La combinación de las dosis adecuadas de sales de citrato con fruta de café, hacen que se eviten la formación de los cristales productores de los cálculos.',
        icon: <GiFruitBowl size={80}/>, 
    },
    {
        background: 'url(/img/nuestros-productos/naox-life.png)',
        color: '#463a8d',
        title: '',
        subtitle: 'Producto nutracéutico codesarrollado con la Fundación Cardiovascular de Colombia, que mejora la función y estructura muscular esquelética y respiratoria en humanos.',
        icon: <GiFruitBowl size={80}/>, 
    },
];


export default function SlideProductos() {
  return (
    <SlideImagenes slideContent={slideContent}/>
  )
}
