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
  const [translations, setTranslations] = useState(null);

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-5">
        <Button onClick={() => setShowForm(!showForm)} color="green" size="lg">
          {showForm ? "Hide Form" : "New Translation"}
        </Button>
      </div>
      <div ref={parent}>
        {showForm && <FormTranslate setShowForm={setShowForm} setTranslations={setTranslations} />}
      </div>

      {translations && (
        <TranslateCard
          sourceLanguage={translations.source}
          targetLanguage={translations.target}
          originalMessage={translations.original}
          translatedMessage={translations.translated}
        />
      )}
    </>
  );
}

export default App;
