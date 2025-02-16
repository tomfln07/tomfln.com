import { useTranslation } from "react-i18next"
import { Background2 } from "../backgrounds";
import { Container } from "../container";
import { Btn, Discrete_btn } from "../btn_1";
import { motion } from "motion/react";
import { anim_main_txts, containers_parent_anim } from "../animations_structure";

import c from "../assets/icons/languages/c.png"
import js from "../assets/icons/languages/js.png"
import ts from "../assets/icons/languages/ts.png"
import lua from "../assets/icons/languages/lua.png"
import py from "../assets/icons/languages/py.png"
import git from "../assets/icons/techs/git.png"
import github from "../assets/icons/techs/github.png"
import mysql from "../assets/icons/techs/mysql.png"
import nginx from "../assets/icons/techs/nginx.png"
import nodejs from "../assets/icons/techs/nodejs.png"
import react from "../assets/icons/techs/react.png"
import vite from "../assets/icons/techs/vite.png"

export default function Me() {
    const { t } = useTranslation("slide2");

	return (
		<>
            <div id="me" className="relative snap-start">
                <Background2/>
                <Main_txt/>
                <Infos_container/>
                <Discrete_btn
                    className={"absolute left-1/2 bottom-[7%] translate-x-[-50%] md:text-2xl"}
                    placeholder={t("call_to_action")}
                    extended_borders={true}
                    onclick={() => window.location.hash = "#projects"}/>
            </div>
		</>
	)
}

function Main_txt() {
    const { t } = useTranslation("slide2");

    return (
        <div className='text-white font-inter font-bold absolute top-8 left-8 z-20 w-5/6'>
            <motion.h1
                className='text-4xl sm:text-5xl lg:text-5xl'
                whileInView={anim_main_txts.txt.animate}
                transition={anim_main_txts.txt.transition}
                viewport={{ once: true }}>
                {t("title")}
            </motion.h1>
            <motion.h1
                className='text-6xl sm:text-7xl lg:text-7xl w-fit bg-gradient-to-r from-[#5F2C82] to-[#49A09D] bg-clip-text text-transparent'
                whileInView={anim_main_txts.txt_highlight.animate}
                transition={anim_main_txts.txt_highlight.transition}
                viewport={{ once: true }}>{t("title_highlight")}</motion.h1>
        </div>
    )
}

function Infos_container() {
    const { t } = useTranslation("slide2");

    function copy_to_clipboard(text) {
        navigator.clipboard.writeText(text)
        .then(() => { console.log("Copied to clipboard:", text) })
        .catch(err => { console.error("Failed to copy:", err) });
    }

    return (
        <motion.div
            className="absolute top-1/4 left-1/2 translate-x-[-50%] text-xl text-white text-opacity-50 overflow-y-scroll overflow-x-hidden scrollbar-hide leading-6 w-min sm:w-min h-[60%] flex flex-col sm:flex-row sm:items-start gap-8"
            whileInView={containers_parent_anim.animate}
            transition={containers_parent_anim.transition}
            viewport={{ once: true }}>
            <div
                className="flex flex-col gap-8">
                <Container><p>{t("passionate_IT_student")}</p></Container>
                <Container><p>{t("currently_learning")}</p></Container>
                <Container>
                    <p>{t("contact_me")}<strong className="font-extrabold">{t("contact_me_addr")}</strong></p>
                    <Btn
                        placeholder={t("copy_email")}
                        className={"text-lg mt-6 relative left-1/2 translate-x-[-50%]"}
                        onclick={() => copy_to_clipboard(t("contact_me_addr"))}/>
                </Container>
            </div>
            <Container>
                <p className="text-center mb-6">{t("languages")}</p>
                <div className="flex flex-col w-fit m-auto gap-3">
                    <div className="flex gap-3 justify-center">
                        <Icon img={c}/>
                        <Icon img={py}/>
                        <Icon img={lua}/>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <Icon img={ts}/>
                        <Icon img={js}/>
                    </div>
                </div>
                <p className="text-center m-6">{t("techs")}</p>
                <div className="flex flex-col w-fit m-auto gap-3">
                    <div className="flex gap-3 justify-center">
                        <Icon img={git}/>
                        <Icon img={github}/>
                        <Icon img={mysql}/>
                        <Icon img={nginx}/>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <Icon img={nodejs}/>
                        <Icon img={react}/>
                        <Icon img={vite}/>
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}

function Icon({ img })
{
    return <img src={img} className="w-9"/>
}