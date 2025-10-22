function loadIframe(url) {
    const frame = document.getElementById('contentFrame');
    console.log('Загрузка: ' + url);
    frame.src = url;
    
    frame.onload = function() {
        console.log('Страница загружена: ' + url);
    };
    
    frame.onerror = function() {
        console.error('Ошибка загрузки: ' + url);
        frame.srcdoc = '<html><body><h1>Ошибка загрузки страницы</h1></body></html>';
    };
}

// Загрузка страницы по умолчанию
document.addEventListener('DOMContentLoaded', function() {
    loadIframe('DoItAgane1.html');
});