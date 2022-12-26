/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const posts = [
    {
      title: 'Tindakan reformasi digital IMTI',
      href: '#',
      description:
        'Digital leap merupakan upaya kami untuk mempermudah transaksi dan berbagai business conduct dengan rekan maupun klien kami. Setelah satu tahun persiapan arsitektur dan sistem, kini kami luncurkan digital reformation kami.',
      date: 'Des 23, 2022',
      datetime: '2022-12-23',
    },
    {
      title: 'Promosi ',
      href: '#',
      description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
    },
    {
      title: 'Writing effective landing page copy',
      href: '#',
      description:
        'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
      date: 'Jan 29, 2020',
      datetime: '2020-01-29',
    },
  ]
  
  export default function Blog() {
    return (
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 select-none">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Publikasi Artikel</h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-500">Berita terkini mengenai pergerakan bisnis kami</p>
              <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
               
                
              </form>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-3">
                  <a href={post.href} className="text-base font-semibold text-stone-500 hover:text-stone-300">
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  