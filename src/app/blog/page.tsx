'use client'

import { Suspense, useEffect, useState } from "react";
import getPokemons from "./List";
import ClientList from "./ClientList";

export type PokemonItem = {
  name: string;
  url: string;
}

export default function Blog() {
  const data = getPokemons() as Promise<PokemonItem[]>;
  
   return (
    <div className="min-h-[50vh] border border-slate-300">
      <h1 className="w-full py-8 px-4 bg-blue-800 text-white font-bold">Pokemons</h1>
      <Suspense fallback={<Loader />}>
         <ClientList data={data} />
      </Suspense>
    </div>
  )
}

export function Loader() {
  return  <div className="loader"></div>
}