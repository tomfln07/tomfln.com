import { useTranslation } from "react-i18next";
import { Background2 } from "../backgrounds";

export default function Projects() {
	return (
		<>
            <div id="projects" className="relative">
                <Background2/>
                <Main_txt/>
            </div>
		</>
	)
}

function Main_txt() {
    const { t } = useTranslation("slide3");

    return (
        <div className='text-white font-inter font-bold absolute top-8 left-8 z-20 w-5/6'>
            <h1 className='text-4xl sm:text-5xl lg:text-5xl'>{t("title")}</h1>
            <h1 className='text-6xl sm:text-7xl lg:text-7xl w-fit bg-gradient-to-r from-[#5F2C82] to-[#49A09D] bg-clip-text text-transparent'>{t("title_highlight")}</h1>
        </div>
    )
}
