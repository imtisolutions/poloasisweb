/* This example requires Tailwind CSS v2.0+ */
// import { CalendarIcon, LocationMarkerIcon, UsersIcon } from '@heroicons/react/solid'
import { FaUsers } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { AiTwotoneCalendar } from 'react-icons/ai'

const positions = [
  {
    id: 1,
    title: 'Digital Marketing',
    type: 'Full-time',
    location: 'On-site',
    department: 'IT & Komunikasi',
    closeDate: '2023-02-07',
    closeDateFull: '7 Februari 2023',
  },
  {
    id: 2,
    title: 'Operator Website',
    type: 'Full-time',
    location: 'On-site',
    department: 'IT & Komunikasi',
    closeDate: '2023-02-07',
    closeDateFull: '7 Februari 2023',
  },
  {
    id: 3,
    title: 'Akunting Keuangan dan Pajak',
    type: 'Full-time',
    location: 'On-site',
    department: 'Finansial',
    closeDate: '2023-02-07',
    closeDateFull: '7 Februari 2023',
  },
  {
    id: 4,
    title: 'Marketing',
    type: 'Fulltime',
    location: 'On-site',
    department: 'Sales',
    closeDate: '2023-02-07',
    closeDateFull: '7 Februari 2023',
  },
  {
    id: 5,
    title: 'Brand Ambassador',
    type: 'Full-time',
    location: 'On-site',
    department: 'Sales',
    closeDate: '2023-02-07',
    closeDateFull: '7 Februari 2023',
  }
]

export default function Jobs() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md select-none">
      <ul role="list" className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-stone-500 truncate">{position.title}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {position.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <FaUsers className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.department}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <HiLocationMarker className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {position.location}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <AiTwotoneCalendar className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <p>
                      Posisi tutup pada <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
