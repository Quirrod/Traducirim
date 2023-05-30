import "./App.css";
import FormTranslate from "./components/FormTranslate";
import Navbar from "./components/NavBar";
import Button from "./components/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import TranslateCard from "./components/TranslateCard";

function App() {
  const [parent, enableAnimations] = useAutoAnimate();
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />
      {/* center button */}
      <div className="flex justify-center p-5">
        <Button onClick={() => setShowForm(!showForm)} color="green" size="lg">
          {showForm ? "Hide Form" : "New Translation"}
        </Button>
      </div>
      <div ref={parent}>{showForm && <FormTranslate />}</div>
      <TranslateCard
        sourceLanguage="English"
        targetLanguage="French"
        originalMessage="Hello, how are you?"
        translatedMessage="Bonjour, comment allez-vous?"
      />
    </>
  );
}

export default App;
