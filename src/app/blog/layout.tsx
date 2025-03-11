export default function BlogLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex flex-col px-[48px] py-8 bg-[#191919]/80 min-h-screen w-full md:max-w-7xl mx-auto">
      {children}
    </div>
  )
}