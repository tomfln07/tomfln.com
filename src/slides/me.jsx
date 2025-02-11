import { useTranslation } from "react-i18next"
import { Background2 } from "../backgrounds";
import Container from "../container";
import { Btn } from "../btn_1";

export default function Me() {

	return (
		<>
            <div id="me" className="relative">
                <Background2/>
                <Main_txt/>
                <Infos_container/>
            </div>
		</>
	)
}

function Main_txt() {
    const { t } = useTranslation("slide2");

    return (
        <div className='text-white font-inter font-bold absolute top-8 left-8 z-20 w-5/6'>
            <h1 className='text-4xl sm:text-5xl lg:text-5xl'>{t("title")}</h1>
            <h1 className='text-6xl sm:text-7xl lg:text-7xl bg-gradient-to-r from-[#5F2C82] to-[#49A09D] bg-clip-text text-transparent'>{t("title_highlight")}</h1>
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
        <div className="absolute top-1/4 flex flex-col gap-8 left-1/2 translate-x-[-50%] w-3/4 text-xl text-white text-opacity-50 leading-6">
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
    )
}