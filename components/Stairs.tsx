import { motion} from 'framer-motion'

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}
const Stairs = () => {
    const reverseIndex = (index: number) => {
        const totalSteps = 6;
        return totalSteps - index - 1;
    }
    return (
        <>
            {[...Array(6)].map((_, index) => {
                return <motion.div key={index} initial="initial" variants={stairAnimation} animate="animate" exit="exit" transition={{ delay: reverseIndex(index) * 0.1, duration: 0.4, ease: "easeInOut" }} className="h-full w-full relative bg-white" />
            })}
        </>
    )
}

export default Stairs;
