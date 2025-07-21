import { motion } from 'framer-motion';

export default function RippleWaveLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center space-x-1 bg-gray-200">
      {[...Array(7)].map((_, index) => (
        <motion.div
          key={index}
          className="h-8 w-2 rounded-full bg-blue-500"
          animate={{
            scaleY: [0.5, 1.5, 0.5],
            scaleX: [1, 0.8, 1],
            translateY: ['0%', '-15%', '0%'],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
}
