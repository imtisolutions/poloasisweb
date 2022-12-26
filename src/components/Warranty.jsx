/* This example requires Tailwind CSS v2.0+ */
export default function Warranty() {
    return (
      <div className="bg-stone-400 select-none">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Pengguna produk kami?</span>
            <span className="block">Claim your warranty</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-black">
           Syarat dan ketentuan berlaku. Silahkan hubungi kami untuk penjelasan lebih lanjut mengenai garansi produk kami.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-stone-500 bg-white hover:bg-stone-50 sm:w-auto"
          >
            Klaim Garansi
          </a>
        </div>
      </div>
    )
  }
  