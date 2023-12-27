"use client"
export default function CTA({ handleOrderClick }) {
  return (
    <section className='py-12 md:py-24 border-b-2 border-t-2 border-white' id="dostavka">
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
          <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-white'>
            Бесплатный пробный урок
          </span>
          <button className='btn bg-pink-600 text-white rounded-full sm:btn-lg' onClick={() => handleOrderClick("Записаться на пробный урок")}>Записаться на пробный урок</button>
        </div>
      </div>
    </section>
  )
}