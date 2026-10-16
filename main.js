let student1 = new Student(
    "Иванов", "Иван", "Иванович",
    "01.01.2008", "Киев", "123456789"
);

student1.credits.push("Математика: 5");
student1.courseWorks.push("Программирование: 4");
student1.exams.push("Физика: 3");



let student2 = new Student(
    "Петров", "Пётр", "Петрович",
    "02.02.2008", "Львов", "987654321"
);

student2.credits.push("История: 4");
student2.courseWorks.push("Веб-разработка: 5");
student2.exams.push("Химия: 4");

let group = new Group("ИС-21", "Программирование", 2);

group.add(student1);
group.add(student2);

group.show();

let found = group.findStudent("Иванов");

if (found != null) {
    console.log("Найден студент: " + found.name);
} else {
    console.log("Студент не найден");
}

function searchStudent() {
    let surname = document.getElementById("surname").value;
    let student = group.findStudent(surname);

    if (student != null) {
        document.getElementById("result").innerHTML =
            "Фамилия: " + student.surname + "<br>" +
            "Имя: " + student.name + "<br>" +
            "Отчество: " + student.patronymic + "<br>" +
            "Дата рождения: " + student.birthday + "<br>" +
            "Адрес: " + student.address + "<br>" +
            "Телефон: " + student.phone + "<br>" +
            "Зачёты: " + student.credits + "<br>" +
            "Курсовые: " + student.courseWorks + "<br>" +
            "Экзамены: " + student.exams;
    } else {
        document.getElementById("result").innerHTML =
            "Студент не найден";
    }
}

function clearSearch() {
    document.getElementById("surname").value = "";
    document.getElementById("result").innerHTML = "";
}

function addStudent() {
    let surname = document.getElementById("newSurname").value;
    let name = document.getElementById("newName").value;
    let patronymic = document.getElementById("newPatronymic").value;
    let birthday = document.getElementById("newBirthday").value;
    let address = document.getElementById("newAddress").value;
    let phone = document.getElementById("newPhone").value;

    if (surname == "" || name == "") {
        alert("Введи фамилию и имя!");
        return;
    }

    let student = new Student(
        surname, name, patronymic, birthday, address, phone
    );

    group.add(student);
    group.show();

    document.getElementById("result").innerHTML = "Студент добавлен";

    document.getElementById("newSurname").value = "";
    document.getElementById("newName").value = "";
    document.getElementById("newPatronymic").value = "";
    document.getElementById("newBirthday").value = "";
    document.getElementById("newAddress").value = "";
    document.getElementById("newPhone").value = "";
}

function deleteStudent() {
    let surname = document.getElementById("surname").value;

    if (group.delete(surname)) {
        group.show();
        document.getElementById("result").innerHTML = "Студент удалён";
    } else {
        document.getElementById("result").innerHTML = "Студент не найден";
    }
}