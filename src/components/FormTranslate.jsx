import { useState } from "react";
import Button from "./Button";
import { languages } from "../data/data";
import { translateMessage } from "../helper/translate";

export default function FormTrnslate(props) {
  const { setTranslations, setShowForm } = props;
  const [fromLang, setFromLang] = useState("");
  const [toLang, setToLang] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    if (!fromLang) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fromLang: "Select a source language",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, fromLang: null }));
    }

    if (!toLang) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        toLang: "Select a target language",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, toLang: null }));
    }

    if (!mensaje) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mensaje: "Enter a message",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, mensaje: null }));
    }

    const translationRes = await translateMessage(fromLang, toLang, mensaje);
    setTranslations({
      source: fromLang,
      target: toLang,
      original: mensaje,
      translated: translationRes,
    });
    setShowForm(false);
  }

  return (
    <form onSubmit={handleSubmit} className="my-8 mx-auto max-w-md">
      <label htmlFor="from_language" className="block font-medium mb-2">
        Source Language
      </label>
      <div className="relative">
        <select
          id="from_language"
          className={`block appearance-none w-full border rounded py-2 pl-3 pr-10 leading-tight focus:outline-none focus:shadow-outline ${
            errors.fromLang ? "border-red-500" : ""
          }`}
          value={fromLang}
          onChange={(e) => setFromLang(e.target.value)}
        >
          <option value="">Select a language</option>
          {languages.map((language, index) => (
            <option key={index} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4.707 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0L10 4.586l1.293-1.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0L10 8.414l-1.293 1.293a1 1 0 0 1-1.414 0l-3-3z" />
          </svg>
        </div>
      </div>
      {errors.fromLang && (
        <p className="text-red-500 text-sm mt-1">{errors.fromLang}</p>
      )}

      <label htmlFor="to_language" className="block font-medium mt-6 mb-2">
        Target Language
      </label>
      <div className="relative">
        <select
          id="to_language"
          className={`block appearance-none w-full border rounded py-2 pl-3 pr-10 leading-tight focus:outline-none focus:shadow-outline ${
            errors.toLang ? "border-red-500" : ""
          }`}
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
        >
          <option value="">Select a Language</option>
          {languages.map((language, index) => (
            <option key={index} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4.707 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0L10 4.586l1.293-1.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414 0L10 8.414l-1.293 1.293a1 1 0 0 1-1.414 0l-3-3z" />
          </svg>
        </div>
      </div>
      {errors.toLang && (
        <p className="text-red-500 text-sm mt-1">{errors.toLang}</p>
      )}

      <label htmlFor="mensaje" className="block font-medium mt-6 mb-2">
        Message
      </label>
      <textarea
        id="mensaje"
        className={`block w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2 ${
          errors.mensaje ? "border-red-500" : ""
        }`}
        placeholder="Write a message"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        rows="6"
        maxLength={500}
      ></textarea>
      <div className="flex justify-between m-2">
        <div className="text-sm text-gray-500">{mensaje.length}/500</div>
      </div>
      {errors.mensaje && (
        <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
      )}

      <Button
        type="submit"
        color="green"
        size="lg"
        className="w-full mt-6"
        width="full"
      >
        Translate
      </Button>
    </form>
  );
}
