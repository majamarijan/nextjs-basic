import Link from "next/link";

type PokemonItem = {
  name: string;
  url: string;
}

export default async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50');
  const pokemons: {results: PokemonItem[]} = await res.json();
  if(!res.ok) {
    throw new Error('Error');
  }
  console.log(pokemons.results)
  await new Promise((res)=> setTimeout(()=> res('resolved'), 800))
  return pokemons.results;
  // return (
  //   <div className={`mt-8 min-h-[85vh] grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 place-items-stretch`}>
  //           {pokemons.results.map((pokemon: PokemonItem) => (
  //             <Link key={pokemon.name} href={`/blog/${pokemon.name}`} className="rounded-md px-4 py-2 bg-teal-900 text-slate-200 hover:bg-teal-900/80">
  //               <h2>{pokemon.name}</h2>
  //             </Link>
  //           ))}
  //         </div>
  // )
}