import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen = ({ isVisible }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            {/* Gold shimmer ring */}
            <motion.div
              className="absolute inset-0 m-auto h-32 w-32 rounded-full border border-gold/20 md:h-40 md:w-40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 m-auto h-24 w-24 rounded-full border border-gold/30 md:h-32 md:w-32"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.1, 0.4],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />

            <h1 className="relative font-display text-7xl font-light tracking-luxury gold-text-gradient md:text-8xl">
              A.U
            </h1>
            <motion.div
              className="mx-auto mt-4 h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="mt-3 font-nav text-[10px] tracking-luxury text-muted-foreground"
            >
              PORTFOLIO
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
