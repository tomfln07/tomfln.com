import { motion } from "motion/react";

export function Discrete_btn({ placeholder, onclick, extended_borders, className}) {
    const btn_side_padding = extended_borders ? "px-20" : "px-4";

    return (
        <div
            onClick={onclick}
            className={`p-1 ${btn_side_padding} bg-white bg-opacity-10 backdrop-blur-md h-fit w-fit rounded-3xl cursor-pointer ${className}`}>
            <p className="font-extrabold text-2xl md:text-3xl text-white opacity-50">{placeholder}</p>
        </div>
    )
}

export function Btn({ placeholder, onclick, className}) {
    return (
        <motion.div
            onClick={onclick}
            className={`p-2 px-4 bg-white bg-opacity-10 backdrop-blur-md h-fit w-fit rounded-3xl cursor-pointer ${className} shadow-lg shadow-gray-900/50`}>
            <p className="font-bold text-xl text-white">{placeholder}</p>
        </motion.div>
    )
}