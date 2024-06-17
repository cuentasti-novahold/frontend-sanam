import React from 'react'
import CardAplicacionesExitosas from './CardAplicacionesExitosas'

export default function SeccionTwo() {
  return (
    <div className="w-full text-center bg-neutral-200 py-10">
          <p className="text-3xl lg:text-5xl p-5 font-bold text-green-800">Nuestras Soluciones</p>

        {/* <p className="font-bold text-4xl pt-5 sanam-green">Aplicaciones Exitosas</p> */}

        <div className="lg:flex w-full lg:p-5">
          <CardAplicacionesExitosas iconType="frijol"  name={'Frijol'} subtitle={'+14% productividad'} />
          <CardAplicacionesExitosas iconType="arroz"  name={'Arroz'} subtitle={<><p>+18% rendimiento</p><p>+4% peso</p></>} />
          <CardAplicacionesExitosas iconType="maíz"  name={'Maíz'} subtitle={<><p>+15% altura</p><p>+11% hojas</p><p>+9% peso en el elote</p></>} />
          <CardAplicacionesExitosas iconType="aguacate"  name={'Aguacate'} subtitle={<><p>+ Cuaje flor</p><p>+ Area foliar</p><p className="text-xs">(Perfecionando estudio cuantitativo)</p></>} />
        </div>

        <div className="lg:flex w-full lg:p-5">
          <CardAplicacionesExitosas iconType="café"  name={'Café'} subtitle={<><p>+20% productividad</p><p>+1.5% puntos perfil de taza</p></>} />
          <CardAplicacionesExitosas iconType="cacao"  name={'Cacao'} subtitle={'+18% productividad'} />
          <CardAplicacionesExitosas iconType="caña"  name={'Caño de azucar'} subtitle={<><p>+25% TxHaxM</p><p>+13% grados nrix</p><p>+12% sacarosa</p></>} />
          <CardAplicacionesExitosas iconType="limón"  name={'Limón'} subtitle={<><p>+ Viabilidad flor</p><p>+ Productividad</p><p className="text-xs">(Perfecionando estudio cuantitativo)</p></>} />
        </div>

        <div className="lg:flex w-full lg:p-5">
          <CardAplicacionesExitosas iconType="Lechuga"  name={'Lechuga'} subtitle={<><p>pendiente</p></>} />
          <CardAplicacionesExitosas iconType="Tomate"  name={'Tomate'} subtitle={'pendiente'} />
          <CardAplicacionesExitosas iconType="Uva"  name={'Uva'} subtitle={<><p>pendiente</p></>} />
          <CardAplicacionesExitosas iconType="Plátano/Banano"  name={'Plátano/Banano'} subtitle={<><p>pendiente</p><p className="text-xs">(pendiente)</p></>} />
        </div>

      </div>
  )
}
