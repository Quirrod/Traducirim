# Traducirim

## Aplicacion de traduccion de textos

[Ver Traducirim](https://traducirim.netlify.app/)

Hoy les traigo una emocionante novedad para todos aquellos que aman los idiomas y necesitan traducir de forma rápida y eficiente. Les presento **Traducirim**, la página web de traducción más avanzada y fácil de usar.

En este video, les mostraré cómo utilize React, junto con los hooks `useState`, `useEffect` y `localStorage`, para almacenar los datos de un formulario. ¡Comencemos!

Antes de sumergirnos en los detalles técnicos, veamos qué es Traducirim. Es una plataforma en línea que te permite traducir textos de manera eficiente, y lo mejor de todo, es completamente gratuita. Puedes acceder a Traducirim en cualquier momento y en cualquier dispositivo con acceso a internet.

Uno de los hooks más utilizados en React es `useState`. Este hook nos permite crear variables de estado en nuestros componentes funcionales. En Traducirim, usamos `useState` para gestionar los datos del formulario de traducción. Aquí tenemos un componente funcional que utiliza `useState`:

```jsx
// Componente que utiliza useState
const FormularioTraduccion = () => {
  const [fromLang, setFromLang] = useState(
    localStorage.getItem("fromLang") || ""
  );
  const [toLang, setToLang] = useState(localStorage.getItem("toLang") || "");
  const [mensaje, setMensaje] = useState(localStorage.getItem("mensaje") || "");
  const [errors, setErrors] = useState({});

  // Resto del código del componente...
}
```

```jsx
// Componente que utiliza useState
const Translate = () => {
  const [showForm, setShowForm] = useState(false);
  const [translations, setTranslations] = useState(
    localStorage.getItem("translations")
      ? JSON.parse(localStorage.getItem("translations"))
      : null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Resto del código del componente...
}
```

Ahora, hablemos sobre el siguiente hook, `useEffect`. Este hook nos permite realizar efectos secundarios en nuestros componentes funcionales. En Traducirim, utilizamos `useEffect` para guardar los datos del formulario en el `localStorage` cada vez que se actualizan.
```jsx
// Componente que utiliza useEffect
const FormularioTraduccion = () => {
  useEffect(() => {
    localStorage.setItem("fromLang", fromLang);
    localStorage.setItem("toLang", toLang);
    localStorage.setItem("mensaje", mensaje);
    localStorage.setItem("translations", JSON.stringify(translations));
  }, [fromLang, toLang, mensaje, translations]);

  // Resto del código del componente...
}
```

Por último, utilizamos el `localStorage` para almacenar los datos del formulario de traducción de manera persistente. Esto significa que aunque cierres el navegador y vuelvas a ingresar a Traducirim, tus datos aún estarán allí, además de que tus traducciones anteriores se guardarán y mostrarán usando `map`.

```jsx
// Componente que utiliza map

// codigo anterior
translations.map((translation, index) => (
          <TranslateCard
            key={index}
            sourceLanguage={translation.source}
            targetLanguage={translation.target}
            originalMessage={translation.original}
            translatedMessage={translation.translated}
          />
        )
// codigo posterior
```

## Features de Traducirim
- Responsive con Tailwind CSS
- Validacion de formularios
- Uso de localStorage
- Uso de hooks(UserState, useEffect)
- Uso de map
- Uso de API de Google Translate

## Requisitos

Para poder utilizar Traducirim, necesitas tener una computadora con acceso a internet. También necesitas tener un navegador web instalado, como Google Chrome, Mozilla Firefox o Microsoft Edge.

## Instalacion

- Clone el repositorio
- Instale las dependencias con `npm install`
- Inicie el servidor con `npm run dev`

Para ver Traducirim, simplemente debes ingresar a la página web [Traducirim](https://traducirim.netlify.app/).
