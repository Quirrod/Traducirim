import "./App.css";
import FormTranslate from "./components/FormTranslate";
import Navbar from "./components/NavBar";
import Button from "./components/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import TranslateCard from "./components/TranslateCard";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [parent, enableAnimations] = useAutoAnimate();
  const [showForm, setShowForm] = useState(false);
  const [translations, setTranslations] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex justify-center p-5">
        <Button onClick={() => setShowForm(!showForm)} color="green" size="lg">
          {showForm ? "Hide Form" : "New Translation"}
        </Button>
      </div>
      <div ref={parent} className="p-5">
        {showForm && (
          <FormTranslate
            setShowForm={setShowForm}
            setTranslations={setTranslations}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>

      {translations && !isModalOpen && (
        <TranslateCard
          sourceLanguage={translations.source}
          targetLanguage={translations.target}
          originalMessage={translations.original}
          translatedMessage={translations.translated}
        />
      )}

      <Modal
        isOpen={isModalOpen}
        // onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <h1 className="text-center text-2xl font-bold">Translation</h1>

        {translations ? (
          <TranslateCard
            sourceLanguage={translations.source}
            targetLanguage={translations.target}
            originalMessage={translations.original}
            translatedMessage={translations.translated}
          />
        ) : (
          <h1>No translation</h1>
        )}
        <div className="flex justify-around p-5">
          <Button
            onClick={() => {
              setShowForm(!showForm);
              setIsModalOpen(false);
              localStorage.removeItem("mensaje");
              localStorage.removeItem("fromLang");
              localStorage.removeItem("toLang");
            }}
            color="green"
            size="lg"
          >
            Save
          </Button>
          <Button
            onClick={() => {
              setIsModalOpen(false);
              setTranslations(null);
            }}
            color="red"
            size="lg"
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default App;
