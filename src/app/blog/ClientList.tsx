'use client'

import Link from "next/link";
import { PokemonItem } from "./page";
import { use } from "react";

export default function ClientList({data}: {data: Promise<{results: PokemonItem[]}>}) {
  const pokemons = use(data);
  return (
    <div className={`mt-8 min-h-[85vh] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 place-items-stretch`}>
            {pokemons.results.map((pokemon: PokemonItem) => (
              <Link key={pokemon.name} href={`/blog/${pokemon.name}`} className="rounded-md px-4 py-2 bg-teal-900 text-slate-200 hover:bg-teal-900/80">
                <h2>{pokemon.name}</h2>
              </Link>
            ))}
          </div>
  )
}