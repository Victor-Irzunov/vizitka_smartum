"use client"

export const BtnComp = () => {

	const openModal = () => {
		document.getElementById("my_modal_3").showModal();
	}
	return (
		<button
			className='btn bg-[#FD169F] mt-10 text-white rounded-sm text-lg font-semibold'
			onClick={openModal}
		>
			Записаться
		</button>
	)
}
