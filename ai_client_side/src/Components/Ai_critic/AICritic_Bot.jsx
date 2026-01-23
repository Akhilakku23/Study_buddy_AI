// import { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// export default function CriticUI() {
//   const [question, setQuestion] = useState("");
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const submitPrompt = async () => {
//     if (!question.trim()) return;
//     setLoading(true);
//     setResult("");

//     try {
//       const res = await axios.post("http://localhost:5000/Master/Madv", { question });
//       setResult(res.data.minimal);
//     } catch (err) {
//       setResult("❌ Error processing request.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-vh-100 d-flex align-items-center justify-content-center bg-primary px-3">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="card shadow-lg p-4 text-light"
//         style={{
//           width: "100%",
//           maxWidth: "900px",
//           background: "linear-gradient(135deg, #00b3ff, #4fb6d8, #57cbfd)",
//           borderRadius: "16px",
//         }}
//       >
//         <h2 className="fw-bold mb-1">AI Output Critic</h2>
//         <p className="text-secondary mb-4">
//           Senior-level evaluation for AI-generated Node.js answers
//         </p>

//         <textarea
//           className="form-control mb-3 bg-dark text-light border-secondary"
//           rows="5"
//           placeholder="Paste the AI-generated answer here..."
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           onClick={submitPrompt}
//           className="btn btn-lg fw-semibold text-light"
//           style={{
//             background:
//               "linear-gradient(90deg, #00c6ff, #0072ff)",
//             border: "none",
//           }}
//         >
//           {loading ? "Analyzing..." : "Run Critic"}
//         </motion.button>

//         {loading && (
//           <div className="spinner-border text-info mt-4" />
//         )}

//         {result && (
//           <motion.pre
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="mt-4 p-3 bg-black rounded text-success"
//             style={{
//               whiteSpace: "pre-wrap",
//               fontSize: "0.95rem",
//               border: "1px solid #333",
//             }}
//           >
//             {result}
//           </motion.pre>
//         )}
//       </motion.div>
//     </div>
//   );
// }
import { useState } from "react";
import axios from "axios";

export default function AICritic() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitPrompt = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await axios.post("http://localhost:5000/Master/Madv", { question });
      setResult(res.data.result || res.data.minimal);
    } catch (err) {
      setError("Unable to analyze the input. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center px-3"
      style={{
        background: `
          linear-gradient(
            135deg,
            #0b0f1a 0%,
            #0f1c2e 35%,
            #132a3a 65%,
            #0b1220 100%
          )
        `,
      }}
    >
      <div
        className="card text-light p-4"
        style={{
          width: "100%",
          maxWidth: "900px",
          background:
            "linear-gradient(135deg, #111827, #0f172a)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Header */}
        <div className="mb-4">
          <h3 className="fw-semibold mb-1">AI Output Critic</h3>
          <p className="text-secondary mb-0">
            Professional validation layer for AI-generated outputs
          </p>
        </div>

        {/* Input */}
        <textarea
          className="form-control bg-dark text-light border-secondary mb-3"
          rows="5"
          placeholder="Paste the AI-generated answer here…"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            resize: "none",
          }}
        />

        {/* Action */}
        <button
          onClick={submitPrompt}
          disabled={loading}
          className="btn btn-primary fw-semibold"
          style={{
            background:
              "linear-gradient(90deg, #1e3a8a, #2563eb)",
            border: "none",
          }}
        >
          {loading ? "Analyzing…" : "Run Critic"}
        </button>

        {/* Loading */}
        {loading && (
          <div className="d-flex align-items-center mt-4">
            <div className="spinner-border spinner-border-sm text-info me-2" />
            <span className="text-secondary">
              Evaluating output quality…
            </span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="alert alert-dark mt-4 border border-secondary">
            {error}
          </div>
        )}

        {/* Output */}
        {result && (
          <pre
            className="mt-4 p-3 rounded"
            style={{
              background: "#020617",
              color: "#22c55e",
              fontSize: "0.95rem",
              whiteSpace: "pre-wrap",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {result}
          </pre>
        )}
      </div>
    </div>
  );
}
