import { useTranslation } from "react-i18next";
import { Background3 } from "../backgrounds";
import { Container, Project_container } from "../container";
import { Btn } from "../btn_1";
import { motion } from "motion/react";
import { anim_main_txts, containers_parent_anim } from "../animations_structure";

export default function Projects() {
	return (
		<>
            <div id="projects" className="relative snap-start">
                <Background3/>
                <Main_txt/>
                <Infos_container/>
            </div>
		</>
	)
}

function Main_txt() {
    const { t } = useTranslation("slide3");

    return (
        <div className='text-white font-inter font-bold absolute top-8 left-8 z-20 w-5/6'>
            <motion.h1
                className='text-4xl sm:text-5xl lg:text-5xl'
                animate={anim_main_txts.txt.animate}
                transition={anim_main_txts.txt.transition}>{t("title")}</motion.h1>
            <motion.h1
                className='text-5xl sm:text-7xl lg:text-7xl w-fit bg-gradient-to-r from-[#3A1C71] via-[#D76D77] via-70% to-[#FFAF7B] h-[80px] bg-clip-text text-transparent'
                animate={anim_main_txts.txt_highlight.animate}
                transition={anim_main_txts.txt_highlight.transition}>{t("title_highlight")}</motion.h1>
        </div>
    )
}

function Infos_container() {
    const { t } = useTranslation("slide3");

    return (
        <motion.div
            className="absolute top-[20%] lg:top-[40%] left-1/2 translate-x-[-50%] text-white overflow-y-scroll overflow-x-hidden scrollbar-hide leading-5 h-[70vh] w-min lg:w-min flex flex-col lg:flex-row lg:items-start gap-8"
            whileInView={containers_parent_anim.animate}
            transition={containers_parent_anim.transition}
            viewport={{ once: true }}>
            <Project_container title={t("huffman_title")} desc={t("huffman_desc")} github_url={"https://github.com/tomfln07/my_huffman"} btn_placeholder={"Discover"}/>
            <Project_container title={t("SIP_title")} desc={t("SIP_desc")} github_url={"https://github.com/tomfln07/sip-oceans-map"} btn_placeholder={"Discover"}/>
            <Project_container title={t("tomfln.com_title")} desc={t("tomfln.com_desc")} github_url={"https://github.com/tomfln07/tomfln.com"} btn_placeholder={"Discover"}/>
        </motion.div>
    )
}
