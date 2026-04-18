const API_URL = 'https://api.mymemory.translated.net/get';

async function getTranslation(text, sourceLang, targetLang) {
  const response = await fetch(`${API_URL}?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
  const responseJson = await response.json();
  return responseJson.responseData.translatedText;
}

export { getTranslation };