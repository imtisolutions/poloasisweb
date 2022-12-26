/* This example requires Tailwind CSS v2.0+ */
// import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import { BsFillShieldFill, BsArrowRepeat } from 'react-icons/bs'
import Tangki from '../images/tangki.jpg'
import Resin from '../images/resin.webp'

export default function Tank() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden select-none">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-stone-500">
                  <BsFillShieldFill className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Tangki air plastik 
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Tangki air plastik yang di produksi menggunakan pure high density polyethylene, menghasilkan tekstur yang tebal disertai dengan kelenturan yang pas untuk mengurangi damage pada tubuh tangki.
                </p>
                <div className="mt-6">
                  <a
                    href="/quote"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-stone-500 hover:bg-stone-400"
                  >
                    Dapatkan Harga
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Pelayanan memuaskan, kualitas tahan lama, dan harga terjangkau.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="http://salamkorea.com/wp-content/uploads/2016/04/Amelia-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">R.Setiawan, Customer IMTI</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Tangki}
                alt="Tangki Air Polo dan Oasis"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-stone-500">
                  <BsArrowRepeat className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Resin high density polyethylene
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                 Biji plastik murni yang telah di olah menjadi bahan baku utama dalam memproduksi segala jenis plastik yang berwujud high density polyethylene. 
                </p>
                <div className="mt-6">
                  <a
                    href="/quote"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-stone-500 hover:bg-stone-400"
                  >
                    Dapatkan Harga
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Resin}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
