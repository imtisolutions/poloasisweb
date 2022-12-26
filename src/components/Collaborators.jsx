/* This example requires Tailwind CSS v2.0+ */
import Bri from '../images/bri.png'
import Mandiri from '../images/mandiri.png'

export default function Collaborators() {
  return (
    <div className="bg-stone-500 bg-opacity-50 select-none">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="max-w-md mx-auto text-3xl font-extrabold text-white text-center lg:max-w-xl lg:text-left">
            Banyak bisnis terpercaya di Indonesia mempercayai kami
          </h2>
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12 grayscale hover:grayscale-0 cursor-pointer"
                  src={Bri}
                  alt="Bank Rakyat Indonesia"
                  onClick={() => window.open('https://bri.co.id/')}
                />  
              </div>
              <div className="-mt-3 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4 grayscale hover:grayscale-0 cursor-pointer">
                <img className="h-24 w-40" src={Mandiri} alt="Tuple" onClick={() => window.open('https://bankmandiri.co.id/en/livin?utm_source=SEM_ads&utm_medium=CPC&utm_campaign=LivinQ3PLD023_Livin_Traffic_Ags_Okt_2022_Awareness&utm_content=Learn_more&gclid=Cj0KCQiA45qdBhD-ARIsAOHbVdGSqFjmmv6A7BITtWdODidyhiKOEm82OWkp4hFlok-zmdwP6TPqbtUaAgIdEALw_wcB')} />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img className="h-12" src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg" alt="Level" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
