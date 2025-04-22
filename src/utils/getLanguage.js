const supportedLanguages = ['de', 'en', 'es', 'fr', 'ja', 'pt'];

export function getLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam && supportedLanguages.includes(langParam)) {
    return langParam;
  }
  const systemLang = navigator.language.split('-')[0];
  return supportedLanguages.includes(systemLang) ? systemLang : 'en';
}
