// The animations for all the slides

export const anim_main_txts = {
    txt: {
        animate: {
            x: [-50, 0],
            opacity: [0, 1]
        },
        transition: {
            duration: 0.5,
            type: "spring",
            bounce: 0.3,
            delay: 0.25
        }
    },
    txt_highlight: {
        animate: {
            x: [-50, 0],
            opacity: [0, 1]
        },
        transition: {
            duration: 0.5,
            type: "spring",
            bounce: 0.3,
            delay: 0.3
        }
    }
};

export const home_slide_desc = {
    animate: {
        y: [20, 0],
        opacity: [0, 0.5]
    },
    transition: {
        duration: 0.75,
        type: "spring",
        bounce: 0.3,
        delay: 0.75
    }
};

export const call_to_action_btn_anim = {
    animate: {
        opacity: [0, 1]
    },
    transition: {
        duration: 2,
        type: "spring",
        bounce: 0.3,
        delay: 1.5
    }
};

export const containers_parent_anim = {
    animate: {
        x: ["-50%", "-50%"],
        scale: [0.9, 1],
        opacity: [0, 1]
    },
    transition: {
        duration: 1,
        type: "spring",
        bounce: 0.2,
        delay: 0.5
    }
};