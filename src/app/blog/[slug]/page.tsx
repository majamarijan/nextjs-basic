import Link from "next/link";
import { getPokemon } from "../List";
import Image from "next/image";

export default async function BlogPost({params, searchParams}: {params: Promise<{slug:string}>, searchParams: Promise<{[key:string]: string | string[] | undefined}>}) {
  const {slug} = await params;
  const data = await getPokemon(String(slug));
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded bg-[rgba(0,0,0,.4)] max-w-sm py-8 px-4 flex flex-col items-center gap-8">
        <h2 className="text-2xl font-bold">
          {data.name.toLocaleUpperCase()}
        </h2>
        <Image src={data.sprites.other.dream_world.front_default} alt={data.name} width={200} height={200} />
      </div>
      <Link href={'/blog'} className="w-fit  rounded-md px-4 py-2 border border-slate-400 hover:border-slate-400/70">Back</Link>
    </div>
  )
}