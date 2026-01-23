import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Components/chat_ai/chat";
import Advchat from "./Components/Adv_bot/Advchat";
import AICritic_Bot from "./Components/Ai_critic/AICritic_Bot";
import LandingPage from "./Landing_page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="/baseai" element={<Chat />} />
        <Route path="/Adv" element={<Advchat />} />
        <Route path="/AICritic" element={<AICritic_Bot />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
