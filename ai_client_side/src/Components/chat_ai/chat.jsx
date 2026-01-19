// import { useState } from "react";
// import axios from "axios";
// import "./chat.css";

// export default function App() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   const askBuddy = async () => {
//     if (!question.trim()) return;

//     setLoading(true);
//     setAnswer("");

//     try {
//       const res = await axios.post("http://localhost:5000/chat", { question });
//       setAnswer(res.data.answer);
//     } catch {
//       setAnswer("Backend ghosted us. Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="page">
//       <div className="card">

//         <header className="header">
//           <h2>Study Buddy From G-Tec</h2>
//           <p>Ask slowly. Think deeply. Learn properly.</p>
//         </header>

//         <div className="field">
//           <label>Your Question</label>
//           <textarea
//             rows="4"
//             placeholder="Type your doubt here..."
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//           />
//         </div>

//         <button onClick={askBuddy} disabled={loading}>
//           {loading ? "Thinking..." : "Ask Study Buddy"}
//         </button>

//         {answer && (
//           <div className="answer-box">
//             <span>Answer</span>
//             <p>{answer}</p>
//           </div>
//         )}

        
//       </div>
//       <br />
//     </div>
    
//   );
// }
import { useState } from "react";
import axios from "axios";
import bgImage from "../../assets/Ai.jpg";
import cardImag from "../../assets/image.png";

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

  return (
    <div
      style={{
        backgroundImage: `url(${cardImag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
     <div className="container min-vh-100  d-flex justify-content-center align-items-center">
  <div
    className="card shadow-lg p-4 w-100"
    style={{
      maxWidth: "480px",     // 👈 main control
      minHeight: "320px",    // 👈 comfortable height
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderRadius: "14px",
    }}
  >

          <div className="text-center mb-4">
            <h3 className="fw-bold text-white mb-2">Study Buddy – G-TEC</h3>
            <p className="text-white mb-0">
              Ask slow. Think deep. Learn right.
            </p>
          </div>

          <div className="mb-3">
            <label className="form-label">Your Question</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Type your doubt here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={askBuddy}
            disabled={loading}
          >
            {loading ? "Thinking..." : "Ask Study Buddy"}
          </button>

          {answer && (
            <div className="alert alert-secondary mt-4">
              <strong>Answer:</strong>
              <p className="mb-0 mt-2">{answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
