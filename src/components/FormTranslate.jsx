import { useState } from "react";

export default function FormTrnslate() {
  const [fromLang, setFromLang] = useState("");
  const [toLang, setToLang] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    if (!fromLang) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fromLang: "Selecciona un lenguaje de origen",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, fromLang: null }));
    }

    if (!toLang) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        toLang: "Selecciona un lenguaje de destino",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, toLang: null }));
    }

    if (!mensaje) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mensaje: "El mensaje es obligatorio",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, mensaje: null }));
    }

    console.log("Form submitted:", fromLang, toLang, mensaje);
  }

  return (
    <form onSubmit={handleSubmit} className="my-8 mx-auto max-w-md">
      <label htmlFor="from_language" className="block font-medium mb-2">
        De que lenguaje
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
          <option value="">Selecciona un lenguaje</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Ruby">Ruby</option>
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
        A que lenguaje
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
          <option value="">Selecciona un lenguaje</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Ruby">Ruby</option>
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
        Mensaje
      </label>
      <textarea
        id="mensaje"
        className={`block w-full border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
          errors.mensaje ? "border-red-500" : ""
        }`}
        placeholder="Escribe tu mensaje aquí"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        rows="6"
      ></textarea>
      {errors.mensaje && (
        <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
      )}

      <button
        type="submit"
        className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Traducir
      </button>
    </form>
  );
}
