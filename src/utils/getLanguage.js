const supportedLanguages = ['de', 'en', 'es', 'fr', 'ja', 'pt'];

export function getLanguage() {
    // Создаем объект URLSearchParams для работы с параметрами строки запроса URL.
    const urlParams = new URLSearchParams(window.location.search);
    // Получаем значение параметра 'lang' из URL, если он есть.
    const langParam = urlParams.get('lang');
    // Проверяем, существует ли параметр 'lang' и входит ли его значение в список поддерживаемых языков.
    if (langParam && supportedLanguages.includes(langParam)) {
        // Если параметр 'lang' валиден, возвращаем его значение.
        return langParam;
    }
    // Если параметра 'lang' нет или он не поддерживается, пытаемся определить язык системы пользователя.
    // navigator.language возвращает строку с информацией о языке пользователя (например, 'en-US', 'de-DE').
    // split('-')[0] разделяет эту строку по дефису и берет первую часть (код языка, например, 'en', 'de').
    const systemLang = navigator.language.split('-')[0];
    // Проверяем, входит ли определенный язык системы в список поддерживаемых языков.
    // Если да, возвращаем язык системы, иначе возвращаем язык по умолчанию 'en'.
    return supportedLanguages.includes(systemLang) ? systemLang : 'en';
}
