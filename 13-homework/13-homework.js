let count = 0;

function promiseReturn() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const date = Date.now().toString();
            res(String.fromCharCode(date.substr(date.length - 5)));
        }, 50);
    });
}
async function getRandomChinese(length) {
    if (length < 1) return 'Введене число < 1';
    let string = '';
    while (count < length) {
      await promiseReturn().then(char => string = string + char);
       count++;
    }
    if (length === count)
        count = 0;
    return string;
}


// getData створена  для зручного тестування через консоль
function getData(length) {
    getRandomChinese(length).then(res => {
        if (document.querySelector("span"))
            document.querySelector("span").remove();
        const span = document.createElement('span');
        span.innerHTML = res;
        document.body.append(span);
    });
}

getData(4);