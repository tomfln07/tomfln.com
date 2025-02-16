import { useTranslation } from "react-i18next";
import Language from "./language";
import Home from "./slides/home";
import Me from "./slides/me";
import Projects from "./slides/projects";

export default function App() {
    const { t } = useTranslation("common");

	document.title = t("page_title");

	return (
		<>
        <Language/>
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
            <Home/>
            <Separator/>
            <Me/>
            <Separator/>
            <Projects/>
        </div>
		<Credit t={t}/>
		</>
	)
}

function Separator() {
    return <div className="relative z-10 w-[100%] h-1 bg-stone-950"></div>
}

function Credit({ t }) {
	return <h1 className="fixed top-[97vh] w-full text-white text-sm font-semibold opacity-50 italic z-[999]">{t("credit")}</h1>
}