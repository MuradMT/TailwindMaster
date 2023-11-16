'use client'
export default function Home() {
  return (
    <>
      {/*
      Component Libraries:
      1)Shadcn
      2)Tailwind UI
      3)Headless UI
      */}
      <main className="p-5">
        <h1 className="text-center text-lg text-green-400">Hello World</h1>
        <div className="my-4 h-10 w-full rounded-md border-2 border-violet-600 bg-violet-200 p-2 pt-2">
          <p className="text-center font-mono font-extrabold">A div</p>
        </div>
        {/*Layout*/}
        <div className="fixed top-0 h-10 w-10 bg-red-500"></div>
        <div className="flex justify-between">
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
          <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          <div className="h-20 bg-violet-500"></div>
          <div className="h-20 bg-violet-500"></div>
          <div className="h-20 bg-violet-500"></div>
        </div>
        <div className="hidden md:block">
          <p>i will appear on {'>'}=768px,i am md</p>
        </div>
        <div className="hidden max-md:block">
          <p>i will appear on {'<'}768px ,i am md-max</p>
        </div>
        <button className="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">Click me</button>
        <ul className="my-2 space-y-2">
          <li className="bg-white p-2 first:bg-yellow-100">Item 1</li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 2</li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 3</li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 4</li>
          <li className="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">Item 5</li>
        </ul>
        <div className="card">
          <h3 className="textelement">This is a text element</h3>
          <p className="dark:text-blue-100  mt-2 text-sm text-slate-500 ">This is an even longer p tag element</p>
          <button id="toggleDark"
            className="text-blue-900 px-2 py-2 text-sm font-medium mt-8 bg-blue-100 rounded-md"
            onClick={() => {
              document.body.classList.toggle('dark')
              if(document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark')
              }
              else {
                document.documentElement.classList.add('dark')
              }
            }
            }
          >Toggle Dark Mode</button>
        </div>
        <button className="special-button">Click Me</button>
        <p className="text-[20px] text-chestnut bg-stone-100 p-[16px]">Chestnut Color</p>
      </main>
    </>
  )
}
