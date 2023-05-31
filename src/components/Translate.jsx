import Button from "./Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import TranslateCard from "./TranslateCard";
import { DeleteCircle } from "iconoir-react";
import Modal from "./Modal";
import FormTranslate from "./FormTranslate";

export default function Translate() {
  const [parent, enableAnimations] = useAutoAnimate();
  const [showForm, setShowForm] = useState(false);
  const [translations, setTranslations] = useState(
    localStorage.getItem("translations")
      ? JSON.parse(localStorage.getItem("translations"))
      : null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center p-5">
        <Button onClick={() => setShowForm(!showForm)} color="green" size="lg">
          {showForm ? "Hide Form" : "New Translation"}
        </Button>
      </div>
      {/* form */}
      <div ref={parent} className="p-5">
        {showForm && (
          <FormTranslate
            setShowForm={setShowForm}
            setTranslations={setTranslations}
            setIsModalOpen={setIsModalOpen}
            translations={translations}
          />
        )}
      </div>
      {/* list of Translations */}
      {translations &&
        !isModalOpen &&
        translations.map((translation, index) => (
          <TranslateCard
            key={index}
            sourceLanguage={translation.source}
            targetLanguage={translation.target}
            originalMessage={translation.original}
            translatedMessage={translation.translated}
          />
        ))}

      {/* float button to erase translations */}
      {translations && !isModalOpen && (
        <div className="fixed bottom-5 right-5 hover:animate-pulse">
          <Button
            onClick={() => {
              setTranslations(null);
              localStorage.removeItem("mensaje");
              localStorage.removeItem("fromLang");
              localStorage.removeItem("toLang");
            }}
            color="red"
            size="lg"
          >
            <div className="text-xs flex flex-row">
              <DeleteCircle /> Borrar Traducciones
            </div>
          </Button>
        </div>
      )}
      {/* modal */}
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          onClickSaveButton={() => {
            setShowForm(!showForm);
            setIsModalOpen(false);
            localStorage.removeItem("mensaje");
            localStorage.removeItem("fromLang");
            localStorage.removeItem("toLang");
          }}
        >
          <h3
            className="text-lg leading-6 font-medium text-gray-900"
            id="modal-title"
          >
            Accept Translation?
          </h3>
          <div className="mt-2 sm:mt-0 sm:ml-4 sm:text-left">
            <TranslateCard
              sourceLanguage={translations[translations.length - 1].source}
              targetLanguage={translations[translations.length - 1].target}
              originalMessage={translations[translations.length - 1].original}
              translatedMessage={
                translations[translations.length - 1].translated
              }
            />
          </div>
        </Modal>
      )}
    </>
  );
}
