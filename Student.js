class Student {
    constructor(surname, name, patronymic, birthday, address, phone) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.birthday = birthday;
        this.address = address;
        this.phone = phone;

        this.credits = [];
        this.courseWorks = [];
        this.exams = [];
    }
}