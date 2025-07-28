// src/App.jsx
import { Button } from "@/components/ui/button"; // Shadcn UI
import { LucideSparkles } from "lucide-react"; // Lucide icon
import { FaGithub } from "react-icons/fa"; // React-icon
import { motion } from "framer-motion"; // Motion

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-100 to-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center border border-zinc-200"
      >
        <div className="flex justify-center gap-4 mb-4 text-indigo-600 text-3xl">
          <LucideSparkles />
          <FaGithub />
        </div>
        <h1 className="text-2xl font-bold text-zinc-800 mb-2">
          UI Playground 🧪
        </h1>
        <p className="text-zinc-600 mb-6">
          Testing Tailwind, Motion, Shadcn, Lucide, and React-icons all in one.
        </p>
        <Button>Click Me ✨</Button>
      </motion.div>
    </div>
  );
};

export default App;
