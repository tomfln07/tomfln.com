import { useTranslation } from "react-i18next";
import Language from "./language";
import Separator from "./separator";
import Home from "./slides/home";
import Me from "./slides/me";
import Projects from "./slides/projects";

export default function App() {
    const { t } = useTranslation("common")

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
        {/*<div className="fixed top-0 right-0 text-white">
            <a href="#home">SLIDE 1</a>
            <br />
            <a href="#me">SLIDE 2</a>
            <br />
            <a href="#projects">SLIDE 3</a>
        </div>*/}
        <h1 className="fixed bottom-0 w-full text-white text-sm font-semibold opacity-50 italic z-[999]">{t("credit")}</h1>
		</>
	)
}
