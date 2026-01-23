import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(135deg, #512751, #3b0a3b, #5a0f5a)", // dark pink/magenta gradient
        color: "#fff",
      }}
    >
      <div className="container py-5">

        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <h1 className="fw-bold display-5">AI Developer Suite</h1>
          <p className="lead text-light">
            Three intelligent bots to boost your development workflow
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <p className="mx-auto col-lg-8 fs-6 text-light">
            AI Developer Suite is a set of intelligent tools designed to 
            supercharge your development workflow. Whether you need quick answers, 
            deep insights, or professional validation of AI-generated code, these bots have you covered.
          </p>
          <p className="mx-auto col-lg-8 fs-6 text-light">
            <strong>Normal Bot</strong> – Fast, reliable answers for everyday coding tasks. Perfect for quick problem-solving and reference.<br/>
            <strong>Advanced Bot</strong> – Detailed, in-depth explanations for complex challenges. Ideal for learning, debugging, and exploring new techniques.<br/>
            <strong>Critic Bot</strong> – Professional-grade evaluation of AI outputs. Detects errors, highlights risks, and ensures code recommendations are safe, correct, and production-ready.
          </p>
          <p className="mx-auto col-lg-8 fs-6 text-light">
            Designed for developers by developers, this suite combines clarity, accuracy, and professional-grade reliability with a premium interface built to keep your focus on coding, not distractions.
          </p>
        </motion.div>

        {/* Bot Cards */}
        <div className="row g-4 justify-content-center">

          {/* Normal Bot */}
          <motion.div
            className="col-md-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="card text-white shadow-lg h-100"
              style={{
                background: "linear-gradient(145deg, #ff70a6, #a3168c)", // soft pink → purple
                borderRadius: "16px",
              }}
            >
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Normal Bot</h5>
                <p className="card-text">
                  Quick answers for everyday development tasks.
                </p>
                <Link to="/baseai" className="btn btn-light text-dark mt-3">
                   Click Here to Open Bot
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Advanced Bot */}
          <motion.div
            className="col-md-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div
              className="card text-white shadow-lg h-100"
              style={{
                background: "linear-gradient(145deg, #ff4da6, #d5008f)", // deeper pink → magenta
                borderRadius: "16px",
              }}
            >
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Advanced Bot</h5>
                <p className="card-text">
                  Deep, detailed answers for complex development queries.
                </p>
                <Link to="/Adv" className="btn btn-light text-dark mt-3">
                  Click Here to Open Bot
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Critic Bot */}
          <motion.div
            className="col-md-4"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div
              className="card text-white shadow-lg h-100"
              style={{
                background: "linear-gradient(145deg, #ff007f, #b3006a)", // vibrant pink → dark magenta
                borderRadius: "16px",
              }}
            >
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Critic Bot</h5>
                <p className="card-text">
                  Professional-grade evaluation for AI outputs.
                </p>
                <Link to="/AICritic" className="btn btn-light text-dark mt-3">
                  Click Here to Open Bot
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
