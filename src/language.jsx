export default function Language() {
	return (
		<h3 className='text-white font-inter font-extrabold italic text-xl opacity-30 fixed left-5 top-5'>
			<span onClick={() => i18n.changeLanguage("fr")} className="cursor-pointer">Fr</span>
			<span className="pl-5 pr-5">|</span>
			<span onClick={() => i18n.changeLanguage("en")} className="cursor-pointer"> Eng</span>
		</h3>
	)
}