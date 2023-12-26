import CTA from '@/components/CTA/CTA'
import Catalog from '@/components/Catalog/Catalog'
import Preimushestva from '@/components/Preimushestva/Preimushestva'
import { BtnComp } from '@/components/btn/BtnComp'
import Image from 'next/image'

export default function Home() {



  return (
    <main className="min-h-[80vh] py-32 bg-slate-50 relative">
      <div className='container mx-auto'>
        <div className='flex xz:flex-col sd:flex-row' id='main'>
          <div className='sd:w-1/2 xz:w-full'>
            <h1 className='uppercase font-light sd:text-3xl xz:text-xl text-[#FD169F]'>
              Академия <span className='font-semibold block sd:text-5xl xz:text-3xl sd:mt-4 xz:mt-2'>
                РАЗВИТИЯ ИНТЕЛЛЕКТА
              </span>
            </h1>

            <h2 className='mt-5 uppercase font-semibold sd:text-xl xz:text-sm'>
              Учим быстро считать, читать и думать
            </h2>

            <BtnComp />

          </div>
          <div className='sd:flex justify-end items-center sd:w-1/2 xz:hidden'>
            <Image src='/3d.webp' alt='Фоновая картинка академии' width={328} height={374} />
          </div>
        </div>

        <div className='mt-36 text-center w-full'>
          <p className='text-[#FD169F] sd:text-3xl xz:text-base uppercase font-semibold'>
            Хорошо учиться могут все дети!
          </p>
        </div>
      </div>

      <Preimushestva />

      <Catalog />


      <div className='pt-20 text-center' id='about'>
        <p className='uppercase text-xl'>
          Наша организация является франчайзи компании
        </p>
        <Image src='/logo/logo2.webp'
          alt='франчайзи компании Amakids'
          width={233} height={120}
          className='mx-auto'
        />
      </div>

      <div className='mt-16 text-center'>
        <h5 className='font-bold text-xl'>
          Что такое SMARTUM?
        </h5>
        <p className='mt-3'>
          SMARTUM - академия развития интеллекта для детей от 5 до 16 лет. Наша цель - предоставить возможность подрастающему поколению во всем мире обучаться и развиваться с помощью методик AMAkids. Наша миссия - сделать качественное дополнительное образование для детей и подростков.
        </p>
      </div>
    </main>
  )
}
