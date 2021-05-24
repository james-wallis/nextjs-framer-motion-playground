import { motion } from 'framer-motion'

const variants = {
    hidden: {
        opacity: 0,
        y: -300,
    },
    enter: {
        scale: [0.6, 0.6, 1],
        y: [-300, 0, 0],
        opacity: [0, 1, 1],
    },
    exit: {
        scale: [1, 0.6],
        x: [0, 300],
        y: [0, 150],
        opacity: [1, 0],
    },
}

const AnimatedLayout = ({ children }) => (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'spring' }}
      className="mt-32"
    >
        {children}
    </motion.div>
)

export default AnimatedLayout