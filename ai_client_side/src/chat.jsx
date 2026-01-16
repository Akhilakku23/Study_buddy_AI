import { useState } from "react";
import axios from "axios";
import "./chat.css";

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
    <div className="page">
      <div className="card">

        <header className="header">
          <h2>Study Buddy From G-Tec</h2>
          <p>Ask slowly. Think deeply. Learn properly.</p>
        </header>

        <div className="field">
          <label>Your Question</label>
          <textarea
            rows="4"
            placeholder="Type your doubt here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <button onClick={askBuddy} disabled={loading}>
          {loading ? "Thinking..." : "Ask Study Buddy"}
        </button>

        {answer && (
          <div className="answer-box">
            <span>Answer</span>
            <p>{answer}</p>
          </div>
        )}

      </div>
    </div>
  );
}
