/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
      id: 1,
      question: "Apakah IMTI sama dengan CV.Imex Tama?",
      answer:
        "Benar, PT.Imex Tama Indonesia adalah transformasi dari CV.Imex Tama.",
    },
    {
        id: 2,
        question: 'Di mana basis operasional IMTI?',
        answer: 
         "Basis lokasi IMTI ada di Jl.Kyai Tambak Deres 289-291, Surabaya."
    },
    {
        id: 3,
        question: 'Berapa lama garansi produk?',
        answer:
         "Kami memberikan garansi 10 tahun melalui digital signature."
    },
    {
        id: 4,
        question: 'Apa saja produk yang di tawarkan?',
        answer:
         "Silahkan kunjungi halaman produk kami untuk informasi lebih lanjut."
    },
    {
        id: 5,
        question: 'Apa barang telah tersertifikasi?',
        answer:
         "Benar, semua produk kami telah lulus uji coba standar nasional dan telah tersertifikasi."
    },
    {
        id: 6,
        question: 'Apa ada cara lain untuk menghubungi IMTI?',
        answer:
         "Silahkan hubungi kami di 031-51503390 atau kirimkan email ke admin@poloasis.id."
    }
  ]
  
  export default function FAQ() {
    return (
      <section aria-labelledby="faq-heading" className="bg-white select-none">
        <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-xl">
            <h2 id="faq-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Jika pertanyaan yang anda cari tidak dapat anda temukan di kolum pertanyaan berikut, silahkan{' '}
              <a href="#" className="font-medium text-stone-400 hover:text-stone-300">
                hubungi kami
              </a>{' '}
              agar kami dapat merespon pada pertanyaan anda.
            </p>
          </div>
  
          <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-3 text-sm text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    )
  }
  