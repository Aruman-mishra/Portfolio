import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-accent/10 font-bold text-accent shadow-md backdrop-blur-sm transition-transform hover:scale-105 sm:h-12 sm:w-12"
      >
        <span className="text-sm tracking-widest sm:text-base">AM</span>
      </motion.div>
    </div>
  );
}
