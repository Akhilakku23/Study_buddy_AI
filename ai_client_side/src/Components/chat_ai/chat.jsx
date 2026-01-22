import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askBuddy = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await axios.post("http://localhost:5000/chat", { question });
      setAnswer(res.data.answer);
    } catch {
      setAnswer("Backend ghosted us. Try again.");
    }

    setLoading(false);
  };

  // Gradient animation sequence
  const gradientVariants = {
    animate: {
      background: [
        "linear-gradient(135deg, #1e3c72, #8eade3)",
        "linear-gradient(135deg, #8eade3, #1e3c72)",
        "linear-gradient(135deg, #1a8ea8d3, #007fd4)",
        "linear-gradient(135deg, #00d4435b, #0d54d8)",
      ],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      variants={gradientVariants}
      animate="animate"
      style={{
        minHeight: "100vh",
      }}
      className="d-flex justify-content-center align-items-center px-3"
    >
      {/* CARD */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
        className="card shadow-lg p-4 w-100"
        style={{
          maxWidth: "480px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #bebebe, #007fd4)",
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-4"
        >
          <h3 className="fw-bold mb-1">Study Buddy</h3>
          <p className="text-muted mb-0">Ask slow. Think deep. Learn right.</p>
        </motion.div>

        {/* INPUT */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Your Question</label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            className="form-control"
            rows="4"
            placeholder="Type your doubt here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary w-100"
          onClick={askBuddy}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask Study Buddy"}
        </motion.button>

        {/* ANSWER */}
        <AnimatePresence>
          {answer && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="alert alert-secondary mt-4"
            >
              <strong>Answer:</strong>
              <p className="mb-0 mt-2">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ADVANCED LINK */}
        <Link to="/Adv" className="text-decoration-none">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-dark w-100 mt-2"
          >
            Go to Advanced Bot
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
