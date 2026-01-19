import { useState } from "react";
import axios from "axios";
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
      setAdvanced("Something broke on the backend side.");
    }

    setLoading(false);
  };

  return (
     <div
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
      <div className="text-center mb-4">
        <h2 className="fw-bold">🤖 AI Study Buddy</h2>
        <p className="text-muted mb-0">
          Simple answers first. Deep understanding next.
        </p>
      </div>

      {/* Input Card */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                placeholder="Ask your question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="col-md-3 d-grid">
              <button
                className="btn btn-dark"
                onClick={askAI}
                disabled={loading}
              >
                {loading ? "Thinking..." : "Ask AI"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Answers */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 border-primary">
            <div className="card-header bg-primary text-white fw-semibold">
              🧃 Minimal Answer
            </div>
            <div className="card-body">
              <p className="mb-0">
                {minimal || "Waiting for wisdom..."}
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-dark">
            <div className="card-header bg-dark text-white fw-semibold">
              🧠 Advanced Answer
            </div>
            <div className="card-body">
              <p className="mb-0">
                {advanced || "Depth loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
