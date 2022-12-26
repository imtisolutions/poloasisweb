/* This example requires Tailwind CSS v2.0+ */
import { RxValue } from 'react-icons/rx'
import Values from '../images/values.jpg'

export default function Value() {
  return (
    <div className="relative bg-white select-none">
      <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={Values}
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-stone-500 text-white">
              <RxValue className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Value bisnis kami 
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Kami mengutamakan kualitas dan etika dalam berbisnis. 
            Seiring dengan pandangan pemerintah Indonesia, kami mengupayakan zero net carbon untuk mengurangi karbon dioksida dari hasil produksi kami.
            Tim produksi kami juga teliti dalam mengolah limbah untuk tidak mencemari lingkungan, dan kami juga mendukung SDG.
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Zero net carbon</dt>
                <dd className="order-1 text-2xl font-extrabold text-stone-400 sm:text-3xl">2030</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">3 kategori SDG</dt>
                <dd className="order-1 text-2xl font-extrabold text-stone-400 sm:text-3xl">6,8,12</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Reformasi ESG</dt>
                <dd className="order-1 text-2xl font-extrabold text-stone-400 sm:text-3xl">2 tahun</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
