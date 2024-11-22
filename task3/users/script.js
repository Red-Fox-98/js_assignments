const usersList = document.getElementById('usersList');
const getUsers = document.getElementById('getUsers');

function fetchRandomUsers() {
    return new Promise(async (resolve, reject) => {
        //отправка запроса на получение данных пользователей
        const users = await fetch("https://randomuser.me/api/?results=10");
        if (users.status === 200) {
            return resolve(users.json());
        } else {
            const error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
        }
    })
}

getUsers.addEventListener("click", () => {
    //Очистка листа
    usersList.innerHTML = "";
    //Обработка состояния загрузки
    const download = document.createElement("div");
    download.innerHTML = `<div class="download">Загрузка...</div>`;
    usersList.appendChild(download);
    fetchRandomUsers().then(
        users => {
            //Вывод пользователей
            usersList.removeChild(download);
            users.results.map((user) => {
                const userForm = document.createElement("div");
                userForm.style.width = "50%";
                userForm.style.height = "auto";
                userForm.innerHTML = `<div class="user">
                    <img src="${user.picture.large}" alt="Аватар"/>
                    <div>${user.name.first} ${user.name.last}</div>
                    <div>${user.email}</div>
                    </div>`;
                usersList.appendChild(userForm);
            });
        })
        .catch(() => {
            //Вывод ошибки
            usersList.innerHTML = "";
            const errorForm = document.createElement("div");
            errorForm.innerHTML = `<div>Не удалось загрузить пользователей</div>`
            usersList.appendChild(errorForm);
        })
})
