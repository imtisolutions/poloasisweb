/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// import { CameraIcon } from '@heroicons/react/solid'
import Esg from '../images/esg.jpg'

export default function Core() {
  return (
    <div className="bg-white overflow-hidden select-none">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-stone-500 font-semibold tracking-wide uppercase">Etika Bisnis</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Market Stability
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={Esg}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  {/* <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                  <span className="ml-2">Courtesy of redgreystock</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Etika bisnis kami didasarkan pada nilai perusahaan kami, yaitu kesejahteraan, solidaritas, dan kejujuran. Kami menerapkan nilai yang menjadi inti dari perusahaan kami untuk berbisnis dengan
                pihak-pihak eksternal, termasuk customer, supplier, dan kompetitor kami. 
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Sesuai dengan niat pemerintah dalam memajukan perekonomian Indonesia, kami mempercayai bahwa player dalam setiap bidang adalah inti pokok dalam keharmonisan pasar.
              </p>
              <p>
                Kami ingin mengadakan asosiasi tangki air di Indonesia untuk menjaga kestabilan pasar di Indonesia, sehingga existing players bisa terus berkelanjutan untuk terus mensuplai barang.
              </p>
              <p>
                Beberapa poin penting bagi perusahaan kami yang menjadi bagian dari corporate culture kami adalah sebagai berikut:
              </p>
              <ul role="list">
                <li>1. Jujur dan sopan dalam bertindak</li>
                <li>2. Bebas bergairah dan berekspresi</li>
                <li>3. Mementingkan konsumen before and after sales</li>
                <li>4. Selalu rendah hati dalam berkomunikasi</li>
                <li>5. Menganut business etiquette dan bertindak secara profesional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
