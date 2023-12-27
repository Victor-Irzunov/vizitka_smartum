"use client"
import { Link as LinkScroll } from 'react-scroll';

export default function Footer() {
	return (
		<footer
			className="footer footer-center bg-white
			p-10 text-base-content rounded"
			id='contacts'
		>
			<nav className="grid grid-flow-col gap-4">

				<LinkScroll
					to="main"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Главная
				</LinkScroll>

				<LinkScroll
					to="catalog"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Услуги
				</LinkScroll>

				<LinkScroll
					to="preimushestva"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Преимущества
				</LinkScroll>

			</nav>
			<nav>
				<h6 className='mb-1 w-[60vw] font-semibold'>
					Для записи на обучение, вы можете воспользоваться кнопкой «Записаться» на нашем сайте или воспользоваться одним из следующих способов:
				</h6>
				<div className="grid grid-flow-col gap-4">
					<a href="https://www.instagram.com/" target="_blank">

						<svg t="1698341865345" className="fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7244" width="30" height="30">
							<path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7z" p-id="7245" fill='#FD169F'>
							</path>
							<path d="M911.8 512c0-55.2 0.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-0.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-0.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9 0.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1z m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9c-0.1 26.6-21.4 47.9-47.9 47.9z" p-id="7246" fill='#FD169F'>
							</path>
						</svg>

					</a>
					<a href="" target="_blank">
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4026" className="fill-current" width="30" height="30">
							<path d="M512 85.333333c-282.88 0-384 95.573333-384 362.666667 0 183.893333 48.213333 286.72 170.666667 332.8v136.533333a21.333333 21.333333 0 0 0 21.333333 21.333334h13.226667a21.76 21.76 0 0 0 14.08-5.546667l136.533333-122.453333H512c282.88 0 384-95.573333 384-362.666667S794.88 85.333333 512 85.333333z m-10.666667 279.893334a20.48 20.48 0 0 1 8.106667-16.64 19.626667 19.626667 0 0 1 17.92-4.266667 116.906667 116.906667 0 0 1 88.32 88.32 19.626667 19.626667 0 0 1-4.266667 17.92 20.48 20.48 0 0 1-16.64 8.106667h-21.76a21.333333 21.333333 0 0 1-20.48-15.36 53.76 53.76 0 0 0-35.84-35.84 21.333333 21.333333 0 0 1-15.36-20.48z m157.013334 256a90.026667 90.026667 0 0 1-42.666667 35.413333 49.066667 49.066667 0 0 1-38.826667 0 485.546667 485.546667 0 0 1-246.613333-219.306667 651.093333 651.093333 0 0 1-28.586667-66.56A91.306667 91.306667 0 0 1 298.666667 355.84a66.133333 66.133333 0 0 1 56.32-62.72h8.106666a33.28 33.28 0 0 1 20.906667 8.96 244.906667 244.906667 0 0 1 52.48 72.533333 24.746667 24.746667 0 0 1-6.4 31.146667l-6.4 5.546667a36.693333 36.693333 0 0 0-13.653333 54.613333A177.066667 177.066667 0 0 0 506.026667 554.666667a26.453333 26.453333 0 0 0 31.146666-6.826667l2.986667-3.84c17.066667-28.586667 42.666667-25.6 64.853333-9.386667l42.666667 32.853334c24.32 17.066667 24.32 32.426667 10.666667 55.04z m60.586666-170.666667a21.333333 21.333333 0 0 1-16.213333 7.253333H682.666667a21.76 21.76 0 0 1-21.333334-18.773333A159.573333 159.573333 0 0 0 520.106667 298.666667a21.76 21.76 0 0 1-18.773334-21.333334V256a21.333333 21.333333 0 0 1 7.253334-16.213333 20.053333 20.053333 0 0 1 16.213333-5.12 224.426667 224.426667 0 0 1 200.533333 200.533333 20.053333 20.053333 0 0 1-6.4 16.213333z" p-id="4027" fill='#FD169F'></path>
						</svg>
					</a>
					<a href="" target="_blank">
						<svg t="1698336364006" className="fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5051" width="28" height="28">
							<path d="M512 85.333333a426.666667 426.666667 0 0 0-345.6 676.693334L128 878.933333a20.906667 20.906667 0 0 0 5.12 21.76 21.76 21.76 0 0 0 21.76 5.546667l121.6-39.253333A426.666667 426.666667 0 1 0 512 85.333333z m248.32 602.453334a119.893333 119.893333 0 0 1-85.333333 60.16c-22.186667 4.693333-51.626667 8.533333-149.333334-32a530.346667 530.346667 0 0 1-213.333333-187.733334 242.773333 242.773333 0 0 1-50.773333-128 136.96 136.96 0 0 1 42.666666-104.106666 63.573333 63.573333 0 0 1 42.666667-15.36h14.08c12.373333 0 18.773333 0 27.306667 20.906666s34.986667 85.333333 37.973333 92.16a24.32 24.32 0 0 1 2.133333 23.04 78.933333 78.933333 0 0 1-14.08 19.626667c-5.973333 7.253333-12.373333 12.8-18.346666 20.48a20.053333 20.053333 0 0 0-5.12 26.88 381.44 381.44 0 0 0 69.12 85.333333 313.173333 313.173333 0 0 0 100.266666 61.866667 26.453333 26.453333 0 0 0 29.866667-4.693333 426.666667 426.666667 0 0 0 33.28-42.666667 23.893333 23.893333 0 0 1 30.72-8.96c11.52 3.84 72.533333 34.133333 85.333333 40.106667s20.906667 9.386667 23.893334 14.506666a106.666667 106.666667 0 0 1-2.986667 58.453334z" p-id="5052" fill='#FD169F'></path>
						</svg>
					</a>
					<a>
						<svg t="1698336845020" className="fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6173" width="25" height="25"><path d="M679.424 746.861714l84.004571-395.995428c7.424-34.852571-12.580571-48.566857-35.437714-40.009143l-493.714286 190.281143c-33.718857 13.129143-33.133714 32-5.705142 40.557714l126.281142 39.424 293.156572-184.576c13.714286-9.142857 26.294857-3.986286 16.018286 5.156571l-237.129143 214.272-9.142857 130.304c13.129143 0 18.870857-5.705143 25.709714-12.580571l61.696-59.428571 128 94.281142c23.442286 13.129143 40.009143 6.290286 46.299428-21.723428zM1024 512c0 282.843429-229.156571 512-512 512S0 794.843429 0 512 229.156571 0 512 0s512 229.156571 512 512z" p-id="6174" fill='#FD169F'></path></svg>
					</a>
				</div>

				<div className='mt-4'>
					<a href='tel:80447505222' className='btn bg-[#FD169F] text-white text-xl'>
						+375 44 750-52-22
					</a>
				</div>

				<div className='mt-5 mb-0'>
					<p className='uppercase'>
						Откройте новые горизонты для вашего ребенка вместе с нашей академией! Запишитесь прямо сейчас, чтобы обеспечить ему уникальные возможности быстрого обучения, развития критического мышления и формирования прочных навыков чтения и счета.
					</p>
				</div>
			</nav>

			<aside className='my-6'>
				<p className='font-bold'>
					Наши адреса:
				</p>
				<p className='text-xl text-[#FD169F]'>
					г. Минск ул. Прушинских д.31А
				</p>
				<p className='text-xl text-[#FD169F]'>
					г. Минск ул. Народная д.43
				</p>
			
			</aside>

			<aside className="border-t pt-2">
				<p className='text-gray-800 xs:text-xs xz:text-[10px] font-light' >
					Copyright © 2023 | Разработка и Продвижение
					<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-500 underline'> VI:TECH</a>.
					{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
				</p>
			</aside>
		</footer >
	)
}