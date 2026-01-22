// import { useState } from "react";
// import axios from "axios";
// import AdvImg from "../../assets/Adv.jpg"; 

// export default function Advchat() {
//   const [question, setQuestion] = useState("");
//   const [minimal, setMinimal] = useState("");
//   const [advanced, setAdvanced] = useState("");   
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {
//     if (!question.trim()) return;

//     setLoading(true);
//     setMinimal("");
//     setAdvanced("");

//     try {
//       const res = await axios.post("http://localhost:5000/Ai/Adv", {
//         question,
//       });

//       setMinimal(res.data.minimal);
//       setAdvanced(res.data.advanced);
//     } catch {
//       setMinimal("Server said nope 🫠");
//       setAdvanced("Something broke on the backend side.");
//     }

//     setLoading(false);
//   };

//   return (
//      <div
//           style={{
//             backgroundImage: `url(${AdvImg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             minHeight: "100vh",
//           }}
//         >
//     <div className="container py-5">
//       {/* Header */}
//       <div className="text-center mb-4">
//         <h2 className="fw-bold">AI Study Buddy</h2>
//         <p className="text-muted mb-0">
//           Simple answers first. Deep understanding next.
//         </p>
//       </div>

//       {/* Input Card */}
//       <div className="card shadow-sm mb-4">
//         <div className="card-body">
//           <div className="row g-2">
//             <div className="col-md-9">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Ask your question..."
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//               />
//             </div>
//             <div className="col-md-3 d-grid">
//               <button
//                 className="btn btn-dark"
//                 onClick={askAI}
//                 disabled={loading}
//               >
//                 {loading ? "Thinking..." : "Ask AI"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Answers */}
//       <div className="row g-4">
//         <div className="col-md-6">
//           <div className="card h-100 border-primary">
//             <div className="card-header bg-primary text-white fw-semibold">
//               Minimal Answer
//             </div>
//             <div className="card-body">
//               <p className="mb-0">
//                 {minimal || "Waiting for wisdom..."}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="card h-100 border-dark">
//             <div className="card-header bg-dark text-white fw-semibold">
//               Advanced Answer
//             </div>
//             <div className="card-body">
//               <p className="mb-0">
//                 {advanced || "Depth loading..."}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import AdvImg from "../../assets/Adv.jpg";

export default function Advchat() {
  const [question, setQuestion] = useState("");
  const [minimal, setMinimal] = useState("");
  const [advanced, setAdvanced] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setMinimal("");
    setAdvanced("");

    try {
      const res = await axios.post("http://localhost:5000/Ai/Adv", {
        question,
      });

      setMinimal(res.data.minimal);
      setAdvanced(res.data.advanced);
    } catch {
      setMinimal("Server said nope 🫠");
      setAdvanced("Backend had a moment.");
    }

    setLoading(false);
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        backgroundImage: `url(${AdvImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">

        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="fw-bold">AI Study Buddy</h2>
          <p className="text-muted mb-0">
            Simple answers first. Deep understanding next.
          </p>
        </motion.div>

        {/* Input Card */}
        <motion.div
          className="card shadow-sm mb-4"
          whileHover={{ scale: 1.01 }}
        >
          <div className="card-body">
            <div className="row g-2">
              <div className="col-md-9">
                <motion.input
                  type="text"
                  className="form-control"
                  placeholder="Ask your question..."
                  value={question}
                  whileFocus={{ scale: 1.01 }}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="col-md-3 d-grid">
                <motion.button
                  className="btn btn-dark"
                  onClick={askAI}
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    loading
                      ? { opacity: [1, 0.6, 1] }
                      : { opacity: 1 }
                  }
                  transition={{ repeat: loading ? Infinity : 0, duration: 1 }}
                >
                  {loading ? "Thinking..." : "Ask AI"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Answers */}
        <div className="row g-4">

          {/* Minimal */}
          <div className="col-md-6">
            <AnimatePresence>
              {(minimal || loading) && (
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="card h-100 border-primary"
                >
                  <div className="card-header bg-primary text-white fw-semibold">
                    Minimal Answer
                  </div>
                  <div className="card-body">
                    {loading ? <Skeleton /> : <TypeText text={minimal} />}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Advanced */}
          <div className="col-md-6">
            <AnimatePresence>
              {(advanced || loading) && (
                <motion.div
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card h-100 border-dark"
                >
                  <div className="card-header bg-dark text-white fw-semibold">
                    Advanced Answer
                  </div>
                  <div className="card-body">
                    {loading ? <Skeleton /> : <TypeText text={advanced} />}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Helper Components ---------- */

const Skeleton = () => (
  <>
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="bg-secondary rounded mb-2"
        style={{ height: "12px", width: "100%" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      />
    ))}
  </>
);

const TypeText = ({ text }) => (
  <motion.p className="mb-0">
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: i * 0.015 }}
      >
        {char}
      </motion.span>
    ))}
  </motion.p>
);
