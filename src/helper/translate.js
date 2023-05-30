import translate from "translate";

export const translateMessage = async (fromLang, toLang, mensaje) => {
    const text = await translate(mensaje, { from: fromLang, to: toLang });
    console.log(text);
    return text;
}