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
    console.log(string);
    return string;
}


getRandomChinese(4);