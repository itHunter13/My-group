class Group {
    constructor(name, specialty, course) {
        this.name = name;
        this.specialty = specialty;
        this.course = course;
        this.students = [];
    }

    add(student) {
        this.students.push(student);
    }

    show() {
        document.getElementById("count").innerText =
            "Группа: " + this.name +
            ", специальность: " + this.specialty +
            ", курс: " + this.course +
            ". Количество студентов: " + this.students.length;

        let div = document.getElementById("students");
        div.innerHTML = "";

        for (let student of this.students) {
            div.innerHTML +=
                "<h3>" + student.surname + " " + student.name + "</h3>" +
                "<p>Отчество: " + student.patronymic + "</p>" +
                "<p>Дата рождения: " + student.birthday + "</p>" +
                "<p>Адрес: " + student.address + "</p>" +
                "<p>Телефон: " + student.phone + "</p>" +
                "<p>Зачёты: " + student.credits.join(", ") + "</p>" +
                "<p>Курсовые: " + student.courseWorks.join(", ") + "</p>" +
                "<p>Экзамены: " + student.exams.join(", ") + "</p>";
        }
    }

    findStudent(surname) {
        return this.students.find(student => student.surname === surname) || null;
    }

    delete(surname) {
        let index = this.students.findIndex(student => student.surname === surname);

        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }

        return false;
    }
}