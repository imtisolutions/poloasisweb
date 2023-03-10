/* This example requires Tailwind CSS v2.0+ */
// import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'
import { HiOutlineCubeTransparent } from 'react-icons/hi'
import { MdTipsAndUpdates, MdOutlineCenterFocusWeak } from 'react-icons/md'

const supportLinks = [
  {
    name: 'Transparan',
    href: '#',
    description:
      'Prioritas tinggi atas informasi yang kami sampaikan kepada pelanggan, konsisten dan tidak ada hidden fees.',
    icon: HiOutlineCubeTransparent,
  },
  {
    name: 'Bergairah dan Inovatif',
    href: '#',
    description:
      'Tim dengan semangat yang tinggi dan kreatifitas yang tinggi untuk terus selalu meningkatkan kualitas produk dan layanan, mempermudah transaksi dengan pelanggan.',
    icon: MdTipsAndUpdates,
  },
  {
    name: 'Fokus',
    href: '#',
    description:
      'Fokus pada satu titik, yaitu meningkatkan customer satisfaction. Kami menerapkan ESG dan digital reformation dengan tujuan untuk meningkatkan kualitas kami sebagai perusahaan.',
    icon: MdOutlineCenterFocusWeak,
  },
]

export default function About() {
  return (
    <div className="bg-white select-none">
      {/* Header */}
      <div className="relative pb-32 bg-stone-500">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Tentang Kami</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Kami adalah perusahaan yang memiliki nilai sejarah tinggi. Kenali apa yang telah kami bangun selama 30 tahun berpengalaman dalam industri plastik.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-stone-500 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
