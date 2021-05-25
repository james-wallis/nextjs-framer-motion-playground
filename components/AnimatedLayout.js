import { motion } from 'framer-motion'

const variants = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    enter: {
        scale: [0.8, 0.8, 1],
        x: [-200, 0, 0],
        y: [-100, -100, 0],
        opacity: [0, 0.5, 1],
    },
    exit: {
        scale: [1, 0.9, 0.9],
        x: [0, 0, 200],
        y: [0, -50, -50],
        opacity: [1, 0.5, 0],
    },
}

const AnimatedLayout = ({ children }) => (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'spring' }}
      className="mt-24 md:mt-32"
    >
        {children}
    </motion.div>
)

export default AnimatedLayout