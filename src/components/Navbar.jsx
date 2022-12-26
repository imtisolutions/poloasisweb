/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Produk', href: '/produk' },
  { name: 'Karir', href: '/career' },
  { name: 'Dokumentasi', href: '/documentation' },
  { name: 'Tentang Kami', href: '/company' },
]

export default function Navbar() {
  return (
    <header className="bg-stone-500 select-none">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-stone-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">IMTI</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-stone-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="/signin"
              className="inline-block bg-stone-300 py-2 px-4 border border-transparent rounded-md text-base font-medium text-black hover:bg-opacity-75 hover:text-white"
            >
              Masuk{''} / {''}Daftar
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-stone-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
