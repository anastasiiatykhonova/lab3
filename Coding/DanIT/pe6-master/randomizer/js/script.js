const questions = new Randomizer({
    items: [
        //add you questions here
    ],
    storageName: "questions",
    title: "Questions randomizer",
    parent: document.querySelector(".container"),
});

const students = new Randomizer({
    items: [
        "Алієва Поліна",
        "Бардієр Микола",
        "Белов Роман",
        "Биков Микита",
        "Варлам Марія",
        "Верба Дмитро",
        "Грузіна Євгенія",
        "Іванченко Андрій",
        "Ізмаілов Микита",
        "Качанко Данило",
        "Коншин Євген",
        "Кузьменчук Ольга",
        "Мегедь Сергій",
        "Миленко Анастасія",
        "Мисака Світлана",
        "Момот Богдан",
        "Савенок Валерій",
        "Санченко Ігор",
        "Тихонова Анастасія",
        "Томчук Андрій",
        "Цуканов Артем",
    ],
    storageName: "students",
    title: "Students randomizer",
    parent: document.querySelector(".container"),
});
