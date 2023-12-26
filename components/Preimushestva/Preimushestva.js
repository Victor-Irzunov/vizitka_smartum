import Image from "next/image";


export default function Preimushestva() {
	return (
		<section className='py-10 md:py-16 mt-14 bg-[#d9eff9]' id="preimushestva">
			<div className='container mx-auto'>
				<div className='text-center'>
					<h3 className='text-2xl sm:text-4xl font-bold mb-4 uppercase text-[#0099D5]'>
						Наши преимущества
					</h3>
					<p className='text-sm sm:text-lg mb-6 md:mb-14'>
						Эффективная методика академии не только ускоряет усвоение базовых навыков, но также акцентирует внимание на развитии критического мышления и творческого подхода к решению задач. Индивидуализированный подход к каждому ученику помогает выявить и развить его уникальные способности, способствуя всестороннему развитию личности. В результате, выпускники академии обладают не только высокой учебной грамотностью, но и способностью к самостоятельному мышлению в различных сферах знаний.
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>

					<div className="card bg-white transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/preimushestva/children.svg' alt='Обучаем детей 5-16 лет' width={100} height={100} />
							<h4 className="card-title text-[#0099D5]">Возраст учеников</h4>
							<p className="text-sm base-content">
								Обучаем детей от 5 до 16 лет. Наша академия предоставляет интенсивные образовательные программы, специально разработанные с учетом возрастных особенностей детей, что позволяет им эффективно учиться и развиваться на каждом этапе своего становления.
							</p>
						</div>
					</div>


					<div className="card bg-white transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/preimushestva/time.svg' alt='Период обучения' width={80} height={80} />
							<h4 className="card-title text-[#0099D5]">Период обучения</h4>
							<p className="text-sm base-content">
								Обучаем круглогодично, предоставляя детям непрерывную возможность улучшать навыки счета, чтения и мышления. Это обеспечивает постоянное развитие учеников в течение всего года, поддерживая активный и продуктивный образ жизни.
							</p>
						</div>

					</div>



					<div className="card bg-white transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/preimushestva/map.svg' alt='Обучаем детей 5-16 лет' width={80} height={80} />
							<h4 className="card-title text-[#0099D5]">Удобное месторасположение</h4>
							<p className="text-sm base-content">
								Два физических адреса в Минске: ул. Прушинских 31А и ул. Народная 43, предоставляют удобное расположение для наших учеников.
							</p>
						</div>
					</div>


				</div>
			</div>
		</section>

	)
}