import { useTranslation } from "react-i18next";
import { Background1 } from "../backgrounds";
import { Discrete_btn } from "../btn_1";
import { motion } from "motion/react"
import { anim_main_txts, call_to_action_btn_anim, home_slide_desc } from "../animations_structure";

export default function Home() {
    const { t } = useTranslation("slide1");
    
	return (
		<>
            <div id="home" className="relative snap-start">
                <Background1/>
                
                <div className='text-white font-inter font-bold absolute top-1/4 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 w-5/6 flex flex-col gap-6'>
                    <Main_txt t={t}/>
                    <motion.h3
                        className='text-xl lg:text-2xl mt-4 font-extrabold opacity-50'
                        whileInView={home_slide_desc.animate}
                        transition={home_slide_desc.transition}
                        viewport={{ once: true }}>
                        {t("desc")}
                    </motion.h3>
                </div>
                <Call_to_action_btn t={t}/>
            </div>
		</>
	)
}

function Main_txt({ t }) {
    return (
        <div>
            <motion.h1
                className='text-4xl sm:text-5xl lg:text-7xl'
                transition={anim_main_txts.txt.transition}
                whileInView={anim_main_txts.txt.animate}
                viewport={{ once: true }}
                initial={"initial"}>{t("title")}</motion.h1>
            <motion.h1
                className='text-5xl sm:text-6xl lg:text-8xl w-fit bg-gradient-to-r from-[#e75c5c] to-[#e2a681] bg-clip-text text-transparent'
                whileInView={anim_main_txts.txt_highlight.animate}
                viewport={{ once: true }}
                transition={anim_main_txts.txt_highlight.transition}>{t("title_highlight")}</motion.h1>
        </div>
    )
}

function Call_to_action_btn({ t }) {
    return (
        <motion.div
            whileInView={call_to_action_btn_anim.animate}
            viewport={{ once: true }}
            transition={call_to_action_btn_anim.transition}>
            <Discrete_btn
                className={"absolute left-1/2 bottom-[15%] translate-x-[-50%] md:text-2xl"}
                placeholder={t("call_to_action")}
                extended_borders={true}
                onclick={() => window.location.hash = "#me"}/>
        </motion.div>
    )
}