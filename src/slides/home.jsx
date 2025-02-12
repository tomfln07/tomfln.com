import { useTranslation } from "react-i18next";
import { Background1 } from "../backgrounds";
import { Discrete_btn } from "../btn_1";

export default function Home() {
    const { t } = useTranslation("slide1")
    
	return (
		<>
            <div id="home" className="relative">
                <Background1/>
                <div className='text-white font-inter font-bold absolute top-1/4 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 w-5/6 flex flex-col gap-6'>
                    <div>
                        <h1 className='text-4xl sm:text-5xl lg:text-7xl'>{t("title")}</h1>
                        <h1 className='text-5xl sm:text-6xl lg:text-8xl w-fit bg-gradient-to-r from-[#e75c5c] to-[#e2a681] bg-clip-text text-transparent'>{t("title_highlight")}</h1>
                    </div>
                    <h3 className='text-xl lg:text-2xl mt-4 font-extrabold opacity-50'>{t("desc")}</h3>
                </div>
                <Discrete_btn
                    className={"absolute left-1/2 bottom-[15%] translate-x-[-50%] md:text-2xl"}
                    placeholder={t("call_to_action")}
                    extended_borders={true}
                    onclick={() => window.location.hash = "#me"}/>
            </div>
		</>
	)
}