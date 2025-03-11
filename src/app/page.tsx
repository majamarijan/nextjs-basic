import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="px-12 py-8">
    <h1 className="title text-orange-500!">Welcome!</h1>
    <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
    <Image src="https://images.unsplash.com/photo-1741340418533-8e6b487f3920" alt='nature' width={450} height={300} />
    <h2>Home</h2>
    <Link href={'/blog'}>Blog</Link>
   </div>
  );
}
