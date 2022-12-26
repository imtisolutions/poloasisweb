/* This example requires Tailwind CSS v2.0+ */
// import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Dedicated Personnel',
    description: 'Kami memiliki tim khusus quality control sebelum dan sesudah produksi.',
  },
  { name: 'Double Screening', 
    description: 'Pengecekan dua kali di lakukan di setiap tahap hingga barang di terima customer.' },
  {
    name: 'Top Grade Materials',
    description: 'Material mentah murni yang digunakan melalui proses seleksi.',
  },
  { name: 'Certified', description: 'Produk kami telah lulus ujian standar nasional.' },
  { name: 'Brand Existence', description: 'Produk ternama yang memiliki sejarah panjang.' },
  { name: 'Value', description: 'Kami mengutamakan value for money dalam setiap produk yang kami jual.' },
  { name: 'Warranty', description: 'Kami menyediakan garansi selama 10 tahun untuk produk kami.' },
  { name: 'After Service', description: 'Kami menyediakan IMTI Care Center untuk after-sales.' },
]

export default function Advantages() {
  return (
    <div className="bg-white select-none">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-stone-500 uppercase tracking-wide">Kenali produk kami</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Pure selected raw material</p>
          <p className="mt-4 text-lg text-gray-500">
            Keunggulan produk kami yang membuat tangki kami tahan hingga lebih dari 10 tahun
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  {/* <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" /> */}
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
