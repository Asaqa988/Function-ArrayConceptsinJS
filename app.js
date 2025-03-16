let students = ["omar", "ahmad", "anas"];

let courses = [
  { coursename: "node js", duration: "60h", dateofStarting: "12-12-2025" },
  { coursename: "React js", duration: "40h", dateofStarting: "12-05-2025" },
  { coursename: "Java", duration: "80h", dateofStarting: "12-04-2025" },
];

// function to get the course by the name

function getCourseByName(courseName) {
  let course = courses.find(
    (course) => course.coursename.toLowerCase() === courseName.toLowerCase()
  );

  if (course) {
    return `the course is existed with the following info ${course.duration} , ${course.coursename} , ${course.dateofStarting}`;
  } else {
    return `Course ${courseName} not found.`;
  }
}

// function to add a new course

function addCourse(coursename, duration, dateofStarting) {
  courses.push({ coursename, duration, dateofStarting });

  return `the course has been added ${coursename}`;
}

// console.log(addCourse("python with frontend","50H","01-01-2026"))
// console.log(addCourse("python basic","50H","01-01-2026"))
// console.log(addCourse("python advance","50H","01-01-2026"))

// console.log(courses)

// function to register one student to a course

function registerStudent(studentName, CourseName) {
  return `Hello ${studentName} ,registration is succesfull , please find your course info ${getCourseByName(
    CourseName
  )}`;
}

console.log(registerStudent("saeed", "java"));


console.log("fixed")