/* This example requires Tailwind CSS v2.0+ */
// import {
//     CloudUploadIcon,
//     CogIcon,
//     LockClosedIcon,
//     RefreshIcon,
//     ServerIcon,
//     ShieldCheckIcon,
//   } from '@heroicons/react/outline'
import { TiFlowChildren } from 'react-icons/ti'
import { RxShare1 } from 'react-icons/rx'
import { AiOutlineLoading3Quarters, AiOutlineDatabase } from 'react-icons/ai'
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'
import { FaFileSignature } from 'react-icons/fa'
  
  const features = [
    {
      name: 'Satu Proses',
      description: 'Mulai dari order, pengiriman, pembayaran, hingga klaim akan dilaksanakan dalam satu platform.',
      icon: TiFlowChildren,
      
    },
    {
      name: 'Berbagi Informasi',
      description: 'Kami memberikan update dan informasi penting bagi pengguna produk kami melalui digital gateway.',
      icon: RxShare1
      
    },
    {
      name: 'Tanpa Tunggu',
      description: 'Kami mengeliminasi adanya proses antri dan tunggu dalam melakukan transaksi dengan kami.',
      icon: AiOutlineLoading3Quarters,
    },
    {
      name: 'Satu Database',
      description: 'Kolaborator menggunakan database in-house kami di mana mereka bisa mengelolah bisnis mereka.',
      icon: AiOutlineDatabase
    },
    {
      name: 'All In-House',
      description: 'Sistem kami tidak menggunakan outsourcing, di mana personel kami yang melakukan proses R&D untuk sistem yang kami gunakan.',
      icon: RiGitRepositoryPrivateLine,
    },
    {
      name: 'Digital Signature',
      description: 'Kartu garansi produk dan tanda tangan invoice semua di lakukan secara digital untuk mempermudah transaksi.',
      icon: FaFileSignature,
    },
  ]
  
  export default function Features() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32 select-none">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-stone-500">Kenapa Imti</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Kami Pelopor Digital Reformation di Industri Plastik
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Permudah transaksi dan information gathering melalui akses digital yang bersentrik pada IMTI
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-stone-500 p-3 shadow-lg">
                          {/* <features.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  