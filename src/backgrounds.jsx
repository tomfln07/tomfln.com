export function Background1() {
	return (
        <Bg_base>
			<div className="z-0 absolute top-0 right-0 translate-x-[25%] translate-y-[25%] w-[200px] h-[200px] opacity-50 rounded-full bg-light-orange"/> {/* Circle Top */}
			<div className="z-0 absolute bottom-0 left-0 translate-x-[-60%] translate-y-[10%] w-[200px] h-[200px] rounded-full bg-light-red"/> {/* Circle Bottom */}
        </Bg_base>
	)
}

export function Background2() {
	return (
        <Bg_base>
			<div className="z-0 absolute top-0 right-0 translate-x-[25%] translate-y-[-15%] w-[200px] h-[200px] opacity-50 rounded-full bg-[#49A09D]"/> {/* Circle Top */}
			<div className="z-0 absolute bottom-0 left-0 translate-x-[-60%] translate-y-[-25%] w-[200px] h-[200px] rounded-full bg-[#5F2C82]"/> {/* Circle Bottom */}
        </Bg_base>
	)
}

export function Background3() {
	return (
        <Bg_base>
			<div className="z-0 absolute top-0 left-0 w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] rounded-full xl:top-1/2 xl:translate-y-[-100%] bg-[#3A1C71]"/> {/* Circle Top */}
			<div className="z-0 absolute top-1/2 translate-y-[-80%] right-0 translate-x-[50%] xl:top-0 xl:translate-y-[20%] w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] opacity-55 rounded-full bg-[#FFAF7B]"/> {/* Circle Bottom */}
			<div className="z-0 absolute bottom-0 left-1/3 translate-x-[-80%] xl:left-1/2 w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] opacity-50 rounded-full bg-[#D76D77]"/> {/* Circle Bottom */}
        </Bg_base>
	)
}

function Bg_base({ children })
{
    return (
        <div className={`z-0 relative top-0 left-0 w-[100vw] h-[100vh] bg-neutral-900 overflow-hidden`}>
			<div className="z-10 relative top-0 left-0 w-full h-full backdrop-blur-[125px] bg-transparent border-solid border-2 border-transparent border-light-white border-opacity-20"/> {/* Blur effect */}
            { children }
		</div>
    )
}