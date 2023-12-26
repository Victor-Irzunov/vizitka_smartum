"use client"
import Image from "next/image";
import Modal from "../modal/Modal";
import { useState } from "react";
import CTA from "../CTA/CTA";


export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };


  return (
    <>
      <section className='py-16' id="catalog">
        <div className='container mx-auto'>
          <div className='text-center text-[#FD169F]'>
            <h3 className='text-3xl sm:text-5xl font-bold mb-4'>
              Наши услуги
            </h3>
            <p className='text-base sm:text-xl mb-6 md:mb-14'>
              Воспользуйтесь нашими инновационными программами, специально разработанными для детей в возрасте от 5 до 16 лет. Мы предлагаем уникальный опыт обучения, включающий в себя быстрое освоение навыков счета, чтения и развитие критического мышления. Присоединяйтесь к нам, чтобы обеспечить яркое будущее вашему ребенку!
            </p>
          </div>


          <div className='flex flex-wrap justify-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/1.webp" alt="Ментальная арифметика" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Ментальная арифметика
                </h4>
                <p className="text-sm">
                  Ментальная арифметика - это способ считать в уме, не используя бумагу или калькулятор. Вместо этого люди тренируют свой ум для выполнения математических операций, таких как сложение, вычитание, умножение и деление, прямо в своей голове. Это помогает развивать навыки быстрого и точного расчета, улучшает концентрацию и способствует лучшему пониманию чисел.
                </p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn bg-[#FD169F] text-white" onClick={() => handleOrderClick("Ментальная арифметика")}>
                    Записаться
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/2.webp" alt="Обучение чтению" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Обучение чтению
                </h4>
                <p className="text-sm">
                  Приглашаем вас присоединиться к нашим урокам чтения, используя эффективные методики, такие как букварик и читарик. Развивайте навыки чтения у вашего ребенка с нами!
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-[#FD169F] text-white" onClick={() => handleOrderClick("Обучение чтению")}>
                    Записаться
                  </button>
                </div>
              </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/3.webp" alt="Либерика" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Либерика
                </h4>
                <p className="text-sm">
                  Познакомьтесь с уникальной программой "Либерика" для скоростного чтения, которая развивает навыки эффективного восприятия текста. Ускорьте процесс чтения с нами!
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-[#FD169F] text-white" onClick={() => handleOrderClick("Либерика")}>
                    Записаться
                  </button>
                </div>
              </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/4.webp" alt="Меморика" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Меморика
                </h4>
                <p className="text-sm">
                  Познакомьтесь с программой "Меморика", специально разработанной для развития памяти и когнитивных способностей. Улучшите свои навыки запоминания с нами!
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-[#FD169F] text-white" onClick={() => handleOrderClick("Меморика")}>
                    Записаться
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/5.webp" alt="Спидкубинг" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Спидкубинг
                </h4>
                <p className="text-sm">
                  Погрузитесь в увлекательный мир "Спидкубинга" — уникальной головоломки, развивающей логику и пространственное мышление. Наши занятия помогут вам освоить искусство быстрого сбора кубика Рубика.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-[#FD169F] text-white" onClick={() => handleOrderClick("Спидкубинг")}>
                    Записаться
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <CTA handleOrderClick={handleOrderClick} />
      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </>
  )
}