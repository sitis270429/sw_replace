self.addEventListener('push', function (event) {
    const payload = event.data ? event.data.text() : 'Нет данных';
    console.log('Получено push-уведомление:', payload);

    // Отправляем данные на ваш сервер или обрабатываем их
    // fetch('https://ваш-сервер.com/save-push', {
    //     method: 'POST',
    //     body: JSON.stringify({ payload }),
    //     headers: { 'Content-Type': 'application/json' }
    // });
});
