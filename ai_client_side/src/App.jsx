import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Components/chat_ai/chat";
import Advchat from "./Components/Adv_bot/Advchat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/Adv" element={<Advchat />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
