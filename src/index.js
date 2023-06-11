class Student {
  constructor(first_name, last_name, birth_year) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth_year = birth_year;
    this.grades = [];
    this.attendance = [];
  }

  present() {
    if (this.attendance.length < 25) {
      this.attendance.push(true);
    } else {
      console.log("Масив посещения заполнен");
    }
  }

  absent() {
    if (this.attendance.length < 25) {
      this.attendance.push(false);
    } else {
      console.log("Масив посещения заполнен");
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.birth_year;
    return age;
  }

  getAverageGrade() {
    if (this.grades.length > 0) {
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      const averageGrade = sum / this.grades.length;
      return averageGrade;
    } else {
      return 0;
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.attendance.filter((status) => status).length / this.attendance.length;

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодец!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Хорошо, но можно лучше";
    } else {
      return "Редиска!";
    }
  }
}
const student1 = new Student("Сергей", "Петров", 1999);
student1.present();
student1.present();
student1.absent();
student1.grades = [100, 100, 100];
console.log("Имя Фамилия:", student1);
console.log("Возраст:", student1.getAge());
console.log("Средний балл:", student1.getAverageGrade());
console.log("Резюме:", student1.summary());

const student2 = new Student("Альберт", "Симоненко", 2001);
student2.present();
student2.present();
student2.absent();
student2.grades = [87, 96, 75, 60];
console.log("Имя Фамилия:", student2);
console.log("Возраст:", student2.getAge());
console.log("Середний балл:", student2.getAverageGrade());
console.log("Резюме:", student2.summary());

const student3 = new Student("Павел", "Павленко", 2000);
student3.present();
student3.present();
student3.absent();
student3.grades = [20, 36, 49, 10, 25, 34, 46, 23];
console.log("Имя Фамилия:", student3);
console.log("Возраст:", student3.getAge());
console.log("Середний балл:", student3.getAverageGrade());
console.log("Резюме:", student3.summary());