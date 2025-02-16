import { Btn } from "./btn_1";
import { motion } from "motion/react";

export function Container({ children }) {
    return (
        <motion.div className="p-5 font-inter font-bold bg-[#313030] max-sm:relative max-sm:left-1/2 max-sm:translate-x-[-50%] bg-opacity-40 rounded-2xl w-[260px] min-w-[260px]">
            {children}
        </motion.div>
    );
}

export function Project_container({ title, desc, github_url, btn_placeholder }) {
    function github_redirect(url) { window.open(url, "_blank") };

    return (
        <div className="pt-6 px-7 pb-5 font-inter bg-[#313030] max-sm:relative max-sm:left-1/2 max-sm:translate-x-[-50%] bg-opacity-40 rounded-3xl w-[320px] min-w-[320px]">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="font-light py-3 text-md">{desc}</p>
            <Btn
                placeholder={btn_placeholder}
                className={"relative left-1/2 translate-x-[-50%]"}
                onclick={() => github_redirect(github_url)}/>
        </div>
    );
}
