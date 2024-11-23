function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, arguments)
        }, delay);
    }
}

const debouncedFunction = debounce(() => {
    console.log('Вызвана функция с задержкой');
}, 2000);
debouncedFunction();
debouncedFunction();// Этот вызов должен сбросить таймер и предотвратить мгновенный вызов функции.
