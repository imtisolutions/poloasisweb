/* This example requires Tailwind CSS v2.0+ */
import Business from '../images/businessdeal.jpg'

const metrics = [
    { id: 1, stat: '10K+', emphasis: 'Dealer', rest: 'telah bekerjasama dengan kami' },
    { id: 2, stat: '100K+', emphasis: 'Konsumen', rest: 'telah menggunakan produk kami' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'telah kami capai' },
    { id: 4, stat: '10y+', emphasis: 'Ketahanan', rest: 'barang yang telah kami buktikan' },
  ]

  
  export default function Metrics() {
    return (
      <div className="relative bg-stone-400 select-none">
        <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-40 xl:absolute xl:inset-0"
                src={Business}
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-stone-300 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold text-stone-200 tracking-wide uppercase">Milestone Kami</h2>
            <p className="mt-3 text-3xl font-extrabold text-white">
              Kami menyambut tahun yang ke-30 dalam bisnis kami
            </p>
            <p className="mt-5 text-lg text-gray-300">
              Selama 30 tahun dalam menyelenggarakan bisnis kami, kami telah menemukan banyak rekan dan pelanggan yang berharga, dan anda adalah bagian dari perjalanan kami
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-white">{item.stat}</span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  