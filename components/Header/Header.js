"use client"
import Image from 'next/image';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';

// const THEMES = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

export default function Header() {
	// const [theme, setTheme] = useState('light');
	const [isActive, setIsActive] = useState(false)

	// useEffect(() => {
	// 	document.documentElement.setAttribute('data-theme', theme)
	// }, [theme])

	// const handleThemeChange = (e) => {
	// 	const val = e.target.getAttribute('data-set-theme');
	// 	setTheme(val)
	// }
	return (
		<header className='bg-base-100 sticky top-0 z-50 w-full'>
			<div className='container mx-auto'>
				<div className="navbar px-0">
					<div className="navbar-start">
						<div className="dropdown">
							<label tabIndex={0} className="btn btn-circle lg:hidden mr-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
							</label>
							<ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
								<li>
									<LinkScroll
										to="main"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Главная
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="catalog"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Услуги
									</LinkScroll>
								</li>

								<li>
									<LinkScroll
										to="preimushestva"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Преимущества
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="contacts"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Контакты
									</LinkScroll>
								</li>
							</ul>
						</div>
						<Image src='/logo/logo.webp' alt='логотип' width={150} height={42} />
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0 font-light">
							<li>
								<LinkScroll
									to="main"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Главная
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="catalog"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Услуги
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="preimushestva"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Преимущества
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="about"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									О компании
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="contacts"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Контакты
								</LinkScroll>
							</li>
						</ul>
					</div>
					<div className="navbar-end">
						{/* <div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn">
							{THEMES.length} Themes
							</label>
							<ul tabIndex={0} className="dropdown-content mt-1 w-80 max-h-96 overflow-y-auto menu menu-compact p-2  bg-base-200 shadow rounded-box">
								{
									THEMES.map((theme, i) => <li key={theme + i}><button data-set-theme={theme} onClick={handleThemeChange} className="font-medium capitalize">{i + 1 + '. ' + theme}</button></li>)
								}
							</ul>
						</div> */}
						<div className='text-[#FD169F] flex-col items-end'>
							<a href='tel:80447505222' className='font-bold sd:flex xz:hidden sd:text-xl xz:text-base'>
								+ 375 44 7-505-222
							</a>

							<div className='sd:hidden xz:block relative'>
								<Image
									src='/phone.svg'
									alt='80447505222'
									width={55} height={55}
									onClick={() => setIsActive(i => !i)}
								/>
								<div
									className={`absolute
									right-6 bg-slate-100 shadow-lg
									rounded-md py-4 px-3
									${isActive ? 'block' : 'hidden'}
									w-56
									`}

								>
									<p className='mt-2 pl-4 text-sm mb-1 pb-0'>
										Телефон:
									</p>
									<a href='tel:80447505222' className='font-bold text-xl'>
										+ 375 44 7-505-222
									</a>

									<p className='mt-4 pl-4 text-sm mb-0 pb-0'>
										Режим работы:
									</p>
									<p className='font-light text-sm pl-4'>
										пн-вс 9:00-21:00
									</p>
								</div>
							</div>

							<p className='font-light text-sm sd:block xz:hidden text-end'>
								Пн-Вс 9:00 - 21:00
							</p>
						</div>


					</div>
				</div>
			</div>
		</header>
	)
}