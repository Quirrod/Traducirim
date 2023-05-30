export default function TranslateCard(props) {
  const { sourceLanguage, targetLanguage, originalMessage, translatedMessage } =
    props;

  return (
    <div className="bg-gray-50 shadow-md rounded-lg overflow-hidden my-4 mx-auto w-full max-w-lg">
      <div className="p-4">
        <div className="flex flex-row items-center mb-3">
          <div className="flex-1 text-lg font-bold text-gray-800">
            {sourceLanguage} - {targetLanguage} Translation
          </div>
        </div>
        <div className="text-gray-500 text-md mb-4">{originalMessage}</div>
        <hr className="my-3 border-gray-300" />
        <div className="text-gray-900 text-md my-4">{translatedMessage}</div>
      </div>
    </div>
  );
}
