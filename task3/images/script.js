const images = document.getElementById('images')
const random = document.getElementById("random");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
let currentIndex = 0;

function getRandomImages() {
    return new Promise(async (resolve, reject) => {
        //отправка запроса на получение данных пользователей
        const data = await fetch("https://randomuser.me/api/?results=10");
        if (data.status === 200) {
            return resolve(data.json());
        } else {
            const error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
        }
    })
}

//обработка движения свайпа
function goToSlide(index) {
    if (index < 0) {
        index = 9;
    } else if (index >= 10) {
        index = 0;
    }
    currentIndex = index;
    images.style.transform = `translateX(-${currentIndex * 500}px)`;
}

//функция свайпа вправо
function goToNextSlide() {
    goToSlide(currentIndex + 1);
}

//функция свайпа влево
function goToPrevSlide() {
    goToSlide(currentIndex - 1);
}

//вывод рандомных фотографий
random.addEventListener("click", () => {
    getRandomImages().then((data) => {
        images.innerHTML = "";
        data.results.map((user) => {
            const image = document.createElement("div");
            image.className = "image";
            image.innerHTML = `<img src="${user.picture.large}" alt="img"/>`
            images.appendChild(image);
        })
    }).catch(() => {
        //Вывод ошибки
        usersList.innerHTML = "";
        const errorForm = document.createElement("div");
        errorForm.innerHTML = `<div>Не удалось загрузить фотографии</div>`
        usersList.appendChild(errorForm);
    })
})

leftButton.addEventListener("click", goToPrevSlide);
rightButton.addEventListener("click", goToNextSlide);

//запуск свайпа черезе определенное время
setInterval(goToNextSlide, 3000);